export interface CertificateData {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl: string;
  imageLabel?: string;
  note?: string;
  skills: string[];
  accent: string;
  year: string;
  featured?: boolean;
}

export const certificatesList: CertificateData[] = [
  {
    id: "technovation-2026-winner",
    title: "1st Place Winner - Technovation Hackathon 2026",
    issuer: "Sardar Patel University (SPU), Vallabh Vidyanagar",
    issued: "Jan 2026",
    credentialId: "COD034VER",
    credentialUrl: "",
    imageUrl: "/assets/certificates/technovation-2026-winner/technovation-winner.jpeg",
    imageLabel: "technovation-winner.jpeg",
    note: "State-level winner for Automatic Smart Safety Helmet for Electrical Linemen.",
    skills: ["IoT / Embedded Systems", "Team Member", "Problem Solving", "Product Development", "Product Design"],
    featured: true,
    accent: "yellow",
    year: "2026"
  },
  {
    id: "bgi-hackathon-runner-up-2026",
    title: "Runner-up – BGI Hackathon 2026 (Vision 2047 | Visit Bharat)",
    issuer: "Bansal Group of Institutes (BGI)",
    issued: "May 2026",
    credentialId: "",
    credentialUrl: "",
    imageUrl: "/assets/certificates/bgi-hackathon-runner-up-2026/bgi-hackathon-runner-up.jpg",
    imageLabel: "bgi-hackathon-runner-up.jpg",
    note: "Recognized as Runner-up at the BGI Hackathon 2026 (Vision 2047 | Visit Bharat), a national-level innovation platform organized by Bansal Group of Institutes. Competed under Theme: Smart Cities & Urban Innovation and Disaster Management, with the problem statement of developing an IoT-enabled Water Leakage & Theft Detection System. Demonstrated excellence among 500+ teams and 2000+ participants nationwide. Held on 15–16 May 2026 at BGI – SDBC Campus, Indore.",
    skills: ["IoT / Embedded Systems", "Smart Cities", "Water Leakage Detection", "Hackathon", "Team Collaboration", "Problem Solving"],
    featured: true,
    accent: "green",
    year: "2026"
  },
  {
    id: "oracle-oci-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    issued: "Apr 2026",
    credentialId: "103443099OCI25FNDCFA",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F9E7B49ADEA11FACF19AAE826C97969782FA84E855682D6FB6CFFE10A4F3AFE3",
    imageUrl: "/assets/certificates/oracle-oci-foundations/oracle-oci-foundations.png",
    imageLabel: "oracle-oci-foundations.png",
    note: "Demonstrates foundational knowledge of Oracle Cloud Infrastructure (OCI) services, including public cloud concepts, core infrastructure services, security, architecture, and billing/pricing models.",
    skills: ["Oracle Cloud Infrastructure (OCI)", "Cloud Computing", "Infrastructure as a Service (IaaS)", "Cloud Security"],
    featured: true,
    accent: "red",
    year: "2026"
  },
  {
    id: "google-deepmind-slm",
    title: "Google DeepMind: Train A Small Language Model",
    issuer: "Google Skills",
    issued: "Dec 2025",
    credentialId: "20970951",
    credentialUrl: "https://www.skills.google/public_profiles/d7fb9ed1-950e-49d2-a949-b4bfe248e575/badges/20970951?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    imageUrl: "/assets/certificates/google-deepmind-slm/google-deepmind-slm.png",
    imageLabel: "google-deepmind-slm.png",
    note: "Demonstrated skills in formulating language model research problems, building tokenizers, preparing datasets, and executing the training loop for a small transformer language model.",
    skills: ["Google DeepMind", "Large Language Models", "Transformers", "Tokenization", "Model Training"],
    featured: true,
    accent: "blue",
    year: "2025"
  },
  {
    id: "google-genai-academy-2",
    title: "Gen AI Academy 2.0 – DevOps Learning Track",
    issuer: "Google Cloud & H2S",
    issued: "Jan 2026",
    credentialId: "2025H2S10GENAI-DE300868",
    credentialUrl: "",
    imageUrl: "/assets/certificates/google-genai-academy-2/google-genai-academy-2.png",
    imageLabel: "google-genai-academy-2.png",
    note: "For successfully completing the DevOps learning track of Gen AI Academy 2.0 by Google Cloud. Explored CI/CD pipelines using Artifact Registry, Cloud Build, and Cloud Deploy, along with Kubernetes management on GKE including kubectl deployments, monitoring, and continuous delivery practices.",
    skills: ["Google Cloud", "DevOps", "CI/CD", "Artifact Registry", "Cloud Build", "Cloud Deploy", "Kubernetes (GKE)", "kubectl"],
    featured: true,
    accent: "blue",
    year: "2026"
  },
  {
    id: "codeversity-ai-workshop-rudra-2026",
    title: "Certificate of Participation – Artificial Intelligence Workshop",
    issuer: "Codeversity – A National Level Hackathon",
    issued: "Feb 2026",
    credentialId: "COD036VER",
    credentialUrl: "",
    imageUrl: "/assets/certificates/codeversity-ai-workshop-rudra-2026/codeversity-ai-workshop-rudra.jpg",
    imageLabel: "codeversity-ai-workshop-rudra.jpg",
    note: "Participated in the Artificial Intelligence Workshop held at IIT Gandhinagar on 6th February 2026, organized as part of the Codeversity National Level Hackathon.",
    skills: ["Artificial Intelligence", "Machine Learning", "IIT Gandhinagar", "Hackathon"],
    featured: false,
    accent: "blue",
    year: "2026"
  },
  {
    id: "codeversity-hackathon-participation-2026",
    title: "Certificate of Participation – Codeversity National Level Hackathon 2026",
    issuer: "Codeversity – A National Level Hackathon",
    issued: "Feb 2026",
    credentialId: "COD1037VER",
    credentialUrl: "",
    imageUrl: "/assets/certificates/codeversity-hackathon-participation-2026/codeversity-hackathon-participation.jpg",
    imageLabel: "codeversity-hackathon-participation.jpg",
    note: "Participated in the Codeversity National Level Hackathon 2026 (Bitachron 3) under the domain of Artificial Intelligence, as part of Team Creato4. Held from 6th – 8th February 2026 at IIT Gandhinagar.",
    skills: ["Artificial Intelligence", "Hackathon", "Team Collaboration", "IIT Gandhinagar", "Problem Solving"],
    featured: false,
    accent: "purple",
    year: "2026"
  },
  {
    id: "tata-forage-cybersecurity-analyst-2026",
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group via Forage",
    issued: "Apr 2026",
    credentialId: "693066b8877649b4337ecb9f",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_693066b8877649b4337ecb9f_1775979157606_completion_certificate.pdf",
    imageUrl: "/assets/certificates/tata-forage-cybersecurity-analyst-2026/tata-forage-cybersecurity-analyst.png",
    imageLabel: "tata-forage-cybersecurity-analyst.png",
    note: "Completed the Tata Cybersecurity Analyst Job Simulation on Forage (April 2026). Gained hands-on experience in Identity and Access Management (IAM) fundamentals, IAM strategy assessment, crafting custom IAM solutions, and platform integration.",
    skills: ["Cybersecurity", "Identity & Access Management (IAM)", "IAM Strategy", "Platform Integration", "Tata Group"],
    featured: true,
    accent: "cyan",
    year: "2026"
  },
  {
    id: "google-ai-essentials-coursera-2026",
    title: "Google AI Essentials",
    issuer: "Google via Coursera",
    issued: "May 2026",
    credentialId: "UIKTADTWNR8F",
    credentialUrl: "https://coursera.org/verify/specialization/UIKTADTWNR8F",
    imageUrl: "/assets/certificates/google-ai-essentials-coursera-2026/google-ai-essentials.png",
    imageLabel: "google-ai-essentials.png",
    note: "Completed the Google AI Essentials Specialization (5 courses) on Coursera. Covers practical AI skills including Introduction to AI, Maximizing Productivity with AI Tools, the Art of Prompting, Responsible AI use, and Staying Ahead of the AI Curve.",
    skills: ["Artificial Intelligence", "Prompt Engineering", "AI Tools", "Responsible AI", "Productivity", "Google AI"],
    featured: true,
    accent: "blue",
    year: "2026"
  },
  {
    id: "google-start-writing-prompts-coursera-2026",
    title: "Start Writing Prompts like a Pro",
    issuer: "Google via Coursera",
    issued: "May 2026",
    credentialId: "HWW6TM3NO2V6",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/HWW6TM3NO2V6",
    imageUrl: "",
    imageLabel: "google-start-writing-prompts.png",
    note: "Successfully completed Google's 'Start Writing Prompts like a Pro' course on Coursera. Part of the Google AI Essentials Specialization — focused on effective prompt engineering techniques for AI tools.",
    skills: ["Prompt Engineering", "Generative AI", "AI Tools", "Google AI"],
    featured: false,
    accent: "blue",
    year: "2026"
  },
];
