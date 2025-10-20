import { Job } from "@/data/mockJobs";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.example.com";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await fetch(`${API_BASE_URL}/jobs`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch jobs: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data;
};

export type { Job };
