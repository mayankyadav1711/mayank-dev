import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";


const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mayank Yadav — MERN Stack Developer",
  description:
    "Founder & Developer at ColleGPT || MERN STACK Developer || Next Js Developer || Student at LDRP Institute of Technology & Research.",
  generator: "Next.js",
  applicationName: "Mayank Yadav",
  keywords: [
    "freelance", "developer", "frontend", "react", "creative", "tech", "ahmedabad", "software", "portfolio", "mern stack developer", "backend developer", "web development", "javascript", "typescript", "node.js", "express.js", "mongodb", "database", "restful API", "graphql", "programming", "coding", "web design", "user interface", "user experience", "product design", "technology", "remote work", "software engineering", "coding enthusiast", "digital solutions", "problem solver", "innovative solutions", "agile development", "code quality", "mayank yadav", "myk yadav", "yadav mayank", "mayank ldrp", "mayank nptel", "yadav nptel", "myk yadav", "mayank ssip", "mayank collegpt", "mayank yadav collegpt", "yadav mayank collegpt", "collegpt founder", "collegpt developer", "mayank founder collegpt", "mayank developer collegpt", "collegpt mayank yadav", "mayank yadav safarnamaaa", "mayank yadav mongodb", "yadav mayank ldrp", "yadav ldrp", "ldrpmayank", "yadav ldrp", "ldrpyadav", "collegpt yadav", "yadav collegpt", "mayank mern", "yadav mern", "mayank developer", "mayank mern stack", "mayank yadav mern", "mayank yadav react", "mayank react", "mayank hackingly"

  ],
  colorScheme: "dark",
  openGraph: {
    title: "Mayank Yadav — MERN Stack Developer",
    description:
      "Founder & Developer at ColleGPT || MERN STACK Developer || Next Js Developer || Student at LDRP Institute of Technology & Research.",
    url: "https://mayank-dev.vercel.app/",
    siteName: "https://mayank-dev.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co/jkLVTTR/image.png",
        width: 1200,
        height: 630,
        alt: "Mayank Yadav — MERN Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Yadav — MERN Stack Developer",
    description:
      "Founder & Developer at ColleGPT || MERN STACK Developer || Next Js Developer || Student at LDRP Institute of Technology & Research.",
    creator: "mayankyadav_17",

    images: [
      "https://i.ibb.co/jkLVTTR/image.png",
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