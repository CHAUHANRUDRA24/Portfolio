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
    id: "vikas-saptah-hackathon-2025",
    title: "Vikas Saptah Hackathon 2025",
    issuer: "SSIP Gujarat",
    issued: "Oct 2025",
    credentialId: "TM000338",
    credentialUrl: "",
    imageUrl: "/assets/certificates/vikas-saptah-hackathon-2025/vikas-saptah.jpeg",
    imageLabel: "vikas-saptah.jpeg",
    note: "Final round selection; only GCET team selected for the finals.",
    skills: ["Team Member", "Circuit Design", "Critical Thinking"],
    featured: true,
    accent: "blue",
    year: "2025"
  },
  {
    id: "wordpress-website-development",
    title: "WordPress - Website Development",
    issuer: "Billi4You",
    issued: "Nov 2023",
    credentialId: "",
    credentialUrl: "",
    imageUrl: "/assets/certificates/wordpress-website-development/billi4you-wordpress.jpeg",
    imageLabel: "billi4you-wordpress.jpeg",
    note: "Completed in Nov 2021 and officially claimed in Nov 2023.",
    skills: ["WordPress", "Website Development"],
    featured: true,
    accent: "green",
    year: "2023"
  },
  {
    id: "hackerrank-python-basic",
    title: "python_basic certificate",
    issuer: "HackerRank",
    issued: "Feb 2023",
    credentialId: "b405c7dc2c65",
    credentialUrl: "https://www.hackerrank.com/certificates/b405c7dc2c65",
    imageUrl: "/assets/certificates/hackerrank-python-basic/hackerrank-python.jpeg",
    imageLabel: "hackerrank-python.jpeg",
    note: "Verified basic python programming skills through HackerRank assessment.",
    skills: ["Python (Programming Language)"],
    accent: "red",
    year: "2023"
  },
  {
    id: "hackerrank-java-basic",
    title: "java_basic certificate",
    issuer: "HackerRank",
    issued: "Feb 2023",
    credentialId: "7B0A04878372",
    credentialUrl: "https://www.hackerrank.com/certificates/7b0a04878372",
    imageUrl: "/assets/certificates/hackerrank-java-basic/hackerrank-java.jpeg",
    imageLabel: "hackerrank-java.jpeg",
    note: "Verified basic java programming skills through HackerRank assessment.",
    skills: ["Java"],
    accent: "indigo",
    year: "2023"
  },
  {
    id: "sololearn-html",
    title: "HTML Sololearn",
    issuer: "Sololearn",
    issued: "Dec 2022",
    credentialId: "CT-BDBDPP7X",
    credentialUrl: "",
    imageUrl: "/assets/certificates/sololearn-html/sololearn-html.jpeg",
    imageLabel: "sololearn-html.jpeg",
    note: "Verified foundational HTML5 and web layout concepts.",
    skills: ["HTML5"],
    accent: "orange",
    year: "2022"
  },
  {
    id: "edywo-ultimate-edit",
    title: "Ultimate Edit by edywo",
    issuer: "Edywo",
    issued: "Feb 2023",
    credentialId: "cert_ngrn2kxc",
    credentialUrl: "",
    imageUrl: "/assets/certificates/edywo-ultimate-edit/video-editing.jpeg",
    imageLabel: "video-editing.jpeg",
    note: "Completed video creation and production sequence training.",
    skills: ["Video Editing"],
    accent: "pink",
    year: "2023"
  },
  {
    id: "google-digital-marketing",
    title: "The Fundamental of Digital Marketing",
    issuer: "Google Digital Garage",
    issued: "Jun 2021",
    credentialId: "M82 6NZ ZPG",
    credentialUrl: "",
    imageUrl: "/assets/certificates/google-digital-marketing/google-digital-marketing.jpeg",
    imageLabel: "google-digital-marketing.jpeg",
    note: "Foundational marketing certification covers SEO, analytics, and advertising strategies.",
    skills: ["Digital Marketing"],
    accent: "slate",
    year: "2021"
  },
  {
    id: "codeversity-2026-participation",
    title: "Codeversity National Level Hackathon 2026",
    issuer: "Codeversity (IIT Gandhinagar)",
    issued: "Feb 2026",
    credentialId: "COD1035VER",
    credentialUrl: "",
    imageUrl: "/assets/certificates/codeversity-2026-participation/codeversity-participation.jpeg",
    imageLabel: "codeversity-participation.jpeg",
    note: "Certificate of participation for Team Creato4 under the Artificial Intelligence domain at IIT Gandhinagar, held from 6th to 8th February 2026.",
    skills: ["Artificial Intelligence", "Hackathon", "Team Creato4"],
    accent: "yellow",
    year: "2026"
  },
  {
    id: "codeversity-ai-workshop-2026",
    title: "Artificial Intelligence Workshop",
    issuer: "Codeversity (IIT Gandhinagar)",
    issued: "Feb 2026",
    credentialId: "COD034VER",
    credentialUrl: "",
    imageUrl: "/assets/certificates/codeversity-ai-workshop-2026/codeversity-ai-workshop.png",
    imageLabel: "codeversity-ai-workshop.png",
    note: "Certificate for participating in the Artificial intelligence workshop held at IIT Gandhinagar on 6th February 2026.",
    skills: ["Artificial Intelligence", "Workshop", "IIT Gandhinagar"],
    accent: "blue",
    year: "2026"
  }
];
