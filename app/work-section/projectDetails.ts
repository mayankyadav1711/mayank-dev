export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "SDE-Intern",
    description:
      "🌟Hackingly - Worked as a React and Next.js developer in an Agile Environment, turned concept from inception into reality.",
    technologies: ["React.js", "Next.js", "Tailwind"],
    github: "",
    demo: "https://www.hackingly.in/",
    image: require(".//../../public/projects/hackingly.png"),
    available: true,
  },
  {
    id: 1,
    name: "Xenesis-24",
    description:
      "🌟Build a college tech-event website with intuitive event registration and ticket management functionalities, complemented by an appealing UI.",
    technologies: ["React.js", "Python", "Tailwind"],
    github: "",
    demo: "https://anonymous-murex.vercel.app/",
    image: require(".//../../public/projects/xenesis.png"),
    available: true,
  },
  {
    id: 2,
    name: "3rd-Prize",
    description:
      "🥉Secured 3rd prize in a State Level Poster Competition by presenting our innovative idea through an engaging poster.",
    technologies: ["Idea", "Innovation", "Impact"],
    github: "",
    demo: "https://anonymous-murex.vercel.app/",
    image: require(".//../../public/projects/poster.jpg"),
    available: true,
  },
  {
    id: 3,
    name: "Unite-Bharat",
    description:
      "🌟Our team emerged as SIH Finalist🚀 and developed an innovative project repository website💯.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "",
    demo: "https://unite-bharat.vercel.app/",
    image: require(".//../../public/projects/unitebharat.png"),
    available: true,
  },
  {
    id: 4,
    name: "ColleGPT",
    description:
      "🌟Founder, Developer and Content Creator at ColleGPT ~ Get Prepared Together.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "",
    demo: "https://www.collegpt.com/",
    image: require(".//../../public/projects/collegpt.png"),
    available: true,
  },
  {
    id: 5,
    name: "Nptel-Domain",
    description:
      "🌟Completed Programming Domain comprises six courses offered by NPTEL.",
    technologies: ["C++", "Java", "DSA", "DBMS"],
    github: "https://www.youtube.com/watch?v=N5IL58pKQqo&feature=youtu.be",
    demo: "https://linktr.ee/myk_nptel",  
    image: require(".//../../public/projects/nptel.png"),
    available: true,
  },
  {
    id: 6,
    name: "Safarnama",
    description:
      "🌟 Explore Safarnamaaa 🛩️: Unforgettable journeys, amazing destinations, and connections with like-minded travelers 🤝",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/mayankyadav1711/Safarnamaaa",
    demo: "https://www.safarnamaaa.com/",
    image: require(".//../../public/projects/safar.png"),
    available: true,
  },
  {
    id: 7,
    name: "SSIP-22",
    description:
      "🌟Our team emerged as Finalists in the SSIP Hackathon, where we successfully developed the E-Challan Collection System to address a real-life problem.",
    technologies: ["EJS", "Node.js", "MySQL"],
    github: "https://github.com/DPS21302/SSIP-HACKATHON.com",
    demo: "https://www.youtube.com/watch?v=DFTcb2DXvHE&t=8s",
    image: require(".//../../public/projects/ssipphoto.png"),
    available: true,
  },
  {
    id: 8,
    name: "BTB-22",
    description:
      "🌟Winner of National Level Hackathon, our team has built effective and fully functional College Canteen Automation Website.",
    technologies: ["JavaScript", "CSS", "MongoDB"],
    github: "https://github.com/tancreates/THE-HIDE-OUT",
    demo: "https://www.youtube.com/watch?v=It482zYm8hg&t=10s",
    image: require(".//../../public/projects/btb.png"),
    available: true,
  },
  {
    id: 9,
    name: "Compute Engine",
    description:
      "🌟Successfully completed five-course accelerated specialization offered by Google Cloud Education.",
    technologies: ["GCP", "Qwiklabs", "Automation"],
    github: "https://www.linkedin.com/posts/mayankyadav17_completion-certificate-for-architecting-with-activity-6969605614939324416-ZiM9?utm_source=share&utm_medium=member_desktop",
    demo: "https://www.coursera.org/account/accomplishments/specialization/X4Y9MFFR7GCP",
    image: require(".//../../public/projects/courseraa.png"),
    available: true,
  },
  {
    id: 10,
    name: "Facilitator Program",
    description:
      "🌟Achieved the Ultimate Milestone by completing all the 40 Quests and 20 Skill Badges.",
    technologies: ["GCP", "Qwiklabs", "Big Data"],
    github: "https://www.linkedin.com/posts/mayankyadav17_google-cloud-gcrf-activity-6992495662911107072-wIQt?utm_source=share&utm_medium=member_desktop",
    demo: "https://www.cloudskillsboost.google/public_profiles/1b818781-66a9-45be-b682-c083a5745ab1",
    image: require(".//../../public/projects/swagsneew.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
