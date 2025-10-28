import { supabase } from "@/integrations/supabase/client";
import { Job } from "@/data/mockJobs";

export const fetchJobs = async (): Promise<Job[]> => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .order('date_posted', { ascending: false });
  
  if (error) {
    throw new Error(`Failed to fetch jobs: ${error.message}`);
  }
  
  return data || [];
};

export type { Job };
