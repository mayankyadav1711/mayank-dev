import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";


const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mayank Yadav ",
  description:
    "Founder & Developer at ColleGPT || MERN STACK Developer || React Js Developer || Student at LDRP Institute of Technology & Research.",
  generator: "Next.js",
  applicationName: "Mayank Yadav",
  icons: {
        icon: "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/mediamodifier_cropped_image.png?alt=media&token=86027b8b-2174-4c18-93e7-84a034d987ca",
        apple:"https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/mediamodifier_cropped_image.png?alt=media&token=86027b8b-2174-4c18-93e7-84a034d987ca",
  },
keywords: [
  "freelance",
  "developer",
  "freelance developer",
  "frontend",
  "react",
  "frontend developer",
  "frontend engineer",
  "creative",
  "creative developer",
  "creative engineer",
  "tech",
  "ahmedabad",
  "software",
  "software developer",
  "portfolio",
  "frontend developer portfolio",
  "creative developer portfolio",
  "mern stack developer",
  "backend developer",
  "full stack developer",
  "web development",
  "javascript",
  "typescript",
  "node.js",
  "express.js",
  "mongodb",
  "database",
  "server-side development",
  "restful API",
  "graphql",
  "backend engineer",
  "programming",
  "coding",
  "web design",
  "user interface",
  "user experience",
  "product design",
  "technology",
  "ahmedabad developer",
  "remote work",
  "software engineering",
  "coding enthusiast",
  "digital solutions",
  "problem solver",
  "innovative solutions",
  "agile development",
  "code quality",
  "mayank yadav",
  "myk yadav",
  "yadav mayank",
  "mayank ldrp",
  "mayank nptel",
  "yadav nptel",
  "myk yadav",
  "mayank ssip",
  "mayank collegpt",
  "mayank yadav collegpt",
  "yadav mayank collegpt",
  "collegpt founder",
  "collegpt developer",
  "mayank founder collegpt",
  "mayank developer collegpt",
  "collegpt mayank yadav",
  "mayank yadav safarnamaaa",
  "mayank yadav mongodb",
  "yadav mayank ldrp",
  "ldrp mayank",
  "yadav ldrp",
  "ldrp yadav",
  "collegpt yadav",
  "yadav collegpt",
  "mayank mern ",
  "yadav mern",
  "mayank developer",
  "mayank mern stack",
  "mayank yadav mern",
  "mayank yadav react",
  "mayank react",
],

  colorScheme: "dark",
   openGraph: {
    type: 'website',
    url: 'https://mayank-dev.vercel.app',  // Add your website URL here
    title: 'Mayank Yadav',
    description: 'Founder & Developer at ColleGPT || MERN STACK Developer || React Js Developer || Student at LDRP Institute of Technology & Research.',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/Untitled%20design.svg?alt=media&token=731112fd-2f4f-4a7e-b189-d844f89ebfb6',
        width: 1200,
        height: 630,
        alt: 'Mayank Yadav',
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
