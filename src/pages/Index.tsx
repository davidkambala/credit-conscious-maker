import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/JobCard";
import { ChatMessage } from "@/components/ChatMessage";
import { SuggestedActions } from "@/components/SuggestedActions";
import { mockJobs, searchJobs, Job } from "@/data/mockJobs";
import { Send, Briefcase } from "lucide-react";
import { toast } from "sonner";

interface Message {
  text: string;
  isUser: boolean;
  jobs?: Job[];
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Bonjour! Je suis votre assistant de recherche d'emploi. Comment puis-je vous aider aujourd'hui?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      let jobs: Job[] = [];

      const lowerText = text.toLowerCase();

      if (lowerText.includes("kinshasa") || lowerText.includes("lubumbashi") || lowerText.includes("goma")) {
        const city = lowerText.includes("kinshasa") ? "Kinshasa" 
                   : lowerText.includes("lubumbashi") ? "Lubumbashi" 
                   : "Goma";
        jobs = mockJobs.filter(job => job.location_city === city);
        botResponse = `Voici les emplois disponibles à ${city}:`;
      } else if (lowerText.includes("emploi") || lowerText.includes("travail") || lowerText.includes("job")) {
        jobs = mockJobs.slice(0, 4);
        botResponse = "Voici quelques opportunités d'emploi qui pourraient vous intéresser:";
      } else if (lowerText.includes("cv") || lowerText.includes("curriculum")) {
        botResponse = "Pour générer votre CV, veuillez sélectionner un emploi auquel postuler. Je créerai un CV adapté à cette offre. (Fonctionnalité à venir avec le backend)";
      } else if (lowerText.includes("développeur") || lowerText.includes("developer")) {
        jobs = searchJobs("développeur");
        botResponse = "Voici les postes de développeur disponibles:";
      } else {
        botResponse = "Je peux vous aider à trouver des emplois à Kinshasa, Lubumbashi ou Goma. Que recherchez-vous?";
      }

      const botMessage: Message = { 
        text: botResponse, 
        isUser: false,
        jobs: jobs.length > 0 ? jobs : undefined
      };
      
      setMessages((prev) => [...prev, botMessage]);
      if (jobs.length > 0) {
        setDisplayedJobs(jobs);
      }
    }, 500);
  };

  const handleAction = (action: string) => {
    if (action === "find_jobs") {
      handleSendMessage("Trouver des emplois dans ma ville");
    } else if (action === "generate_cv") {
      handleSendMessage("Générer mon CV");
    }
  };

  const handleApply = (jobId: string) => {
    const job = mockJobs.find(j => j.id === jobId);
    if (job) {
      toast.success(`Candidature enregistrée pour ${job.title}`);
      handleSendMessage(`Je souhaite postuler pour le poste de ${job.title}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Job Finder RDC</h1>
              <p className="text-xs text-muted-foreground">Votre assistant emploi intelligent</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {messages.map((message, index) => (
            <div key={index}>
              <ChatMessage message={message.text} isUser={message.isUser} />
              {message.jobs && message.jobs.length > 0 && (
                <div className="grid gap-3 mb-4 sm:grid-cols-2">
                  {message.jobs.map((job) => (
                    <JobCard key={job.id} job={job} onApply={handleApply} />
                  ))}
                </div>
              )}
            </div>
          ))}
          {!messages[messages.length - 1]?.isUser && (
            <SuggestedActions onAction={handleAction} />
          )}
          <div ref={messagesEndRef} />
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
            <Button type="submit" size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
