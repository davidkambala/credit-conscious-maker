import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";
import { ChatMessage } from "@/components/ChatMessage";
import { SuggestedActions } from "@/components/SuggestedActions";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "@/api/jobs";

interface Message {
  text: string;
  isUser: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Bonjour! Je suis votre assistant de recherche d'emploi. Comment puis-je vous aider aujourd'hui?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { data: jobs = [], isLoading: jobsLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
      
      const response = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.isUser ? "user" : "assistant",
            content: m.text
          })),
          jobs: jobs,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      
      if (reader) {
        let buffer = "";
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          buffer += decoder.decode(value, { stream: true });
          
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;
              
              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  assistantText += content;
                  setMessages((prev) => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    
                    if (lastMessage && !lastMessage.isUser) {
                      lastMessage.text = assistantText;
                    } else {
                      newMessages.push({ text: assistantText, isUser: false });
                    }
                    return newMessages;
                  });
                }
              } catch (e) {
                console.error("Error parsing SSE data:", e);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = (action: string) => {
    if (action === "find_jobs") {
      handleSendMessage("Trouver des emplois dans ma ville");
    } else if (action === "generate_cv") {
      handleSendMessage("Générer mon CV");
    }
  };

  const handleApply = (jobId: string) => {
    toast.success(`Candidature enregistrée`);
    handleSendMessage(`Je souhaite postuler pour un emploi, pouvez-vous m'aider avec le processus de candidature?`);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <Navigation />

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {jobsLoading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message.text} isUser={message.isUser} />
              ))}
              {!messages[messages.length - 1]?.isUser && !isLoading && (
                <SuggestedActions onAction={handleAction} />
              )}
              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">L'assistant réfléchit...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card shadow-lg">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
