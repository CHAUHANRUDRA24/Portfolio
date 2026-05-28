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
];
