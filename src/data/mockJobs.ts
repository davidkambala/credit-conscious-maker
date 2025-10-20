export interface Job {
  id: string;
  title: string;
  company: string;
  location_city: string;
  url: string;
  date_posted: string; // ISO string
  skills?: string[];
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Développeur Full Stack",
    company: "Tech Solutions RDC",
    location_city: "Kinshasa",
    url: "https://example.com/job/1",
    date_posted: "2025-10-14",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST API"]
  },
  {
    id: "2",
    title: "Chef de Projet IT",
    company: "Digital Congo",
    location_city: "Kinshasa",
    url: "https://example.com/job/2",
    date_posted: "2025-10-13",
    skills: ["Gestion de projet", "Agile", "Scrum", "JIRA", "Communication"]
  },
  {
    id: "3",
    title: "Ingénieur Réseau",
    company: "Telecom Plus",
    location_city: "Lubumbashi",
    url: "https://example.com/job/3",
    date_posted: "2025-10-12",
    skills: ["Cisco", "Routing", "Switching", "Network Security", "VPN"]
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "Mining Analytics",
    location_city: "Lubumbashi",
    url: "https://example.com/job/4",
    date_posted: "2025-10-11",
    skills: ["Python", "SQL", "Power BI", "Excel", "Data Visualization"]
  },
  {
    id: "5",
    title: "Développeur Mobile",
    company: "AppTech Congo",
    location_city: "Goma",
    url: "https://example.com/job/5",
    date_posted: "2025-10-10",
    skills: ["React Native", "Swift", "Kotlin", "iOS", "Android"]
  },
  {
    id: "6",
    title: "Responsable Sécurité IT",
    company: "SecureNet RDC",
    location_city: "Kinshasa",
    url: "https://example.com/job/6",
    date_posted: "2025-10-09",
    skills: ["Cybersécurité", "Firewall", "Penetration Testing", "ISO 27001", "SIEM"]
  },
  {
    id: "7",
    title: "Designer UX/UI",
    company: "Creative Digital",
    location_city: "Goma",
    url: "https://example.com/job/7",
    date_posted: "2025-10-08",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"]
  },
  {
    id: "8",
    title: "Administrateur Systèmes",
    company: "IT Services Congo",
    location_city: "Lubumbashi",
    url: "https://example.com/job/8",
    date_posted: "2025-10-07",
    skills: ["Linux", "Windows Server", "Docker", "Kubernetes", "Bash"]
  }
];

export const getJobsByCity = (city: string): Job[] => {
  return mockJobs.filter(job => 
    job.location_city.toLowerCase() === city.toLowerCase()
  );
};

export const searchJobs = (query: string): Job[] => {
  const lowerQuery = query.toLowerCase();
  return mockJobs.filter(job =>
    job.title.toLowerCase().includes(lowerQuery) ||
    job.company.toLowerCase().includes(lowerQuery) ||
    job.location_city.toLowerCase().includes(lowerQuery)
  );
};
