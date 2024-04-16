"use client";
import Head from 'next/head';
import NavBar from "./navbar/NavBar";
import Hero from "./hero-section/Hero";
import Work from "./work-section/Work";
import About from "./about-section/About";
import Blog from "./blog-section/BlogGrid";
import Contact from "./contact-section/Contact";
import Footer from "./footer/Footer";
import PreLoader from "./animations/PreLoader/PreLoader";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { initialBlobityOptions } from "./utils/BlobityConfig";

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Metadata */}
        <title>Mayank Yadav</title>
        <meta name="description" content="Founder & Developer at ColleGPT || MERN STACK Developer || React Js Developer || Student at LDRP Institute of Technology & Research." />
        {/* Add other meta tags as needed */}
        {/* Keywords */}
        <meta name="keywords" content="freelance, developer, frontend, react, creative, tech, ahmedabad, software, portfolio, mern stack developer, backend developer, web development, javascript, typescript, node.js, express.js, mongodb, database, restful API, graphql, programming, coding, web design, user interface, user experience, product design, technology, remote work, software engineering, coding enthusiast, digital solutions, problem solver, innovative solutions, agile development, code quality, mayank yadav, myk yadav, yadav mayank, mayank ldrp, mayank nptel, yadav nptel, myk yadav, mayank ssip, mayank collegpt, mayank yadav collegpt, yadav mayank collegpt, collegpt founder, collegpt developer, mayank founder collegpt, mayank developer collegpt, collegpt mayank yadav, mayank yadav safarnamaaa, mayank yadav mongodb, yadav mayank ldrp, ldrp mayank, yadav ldrp, ldrp yadav, collegpt yadav, yadav collegpt, mayank mern, yadav mern, mayank developer, mayank mern stack, mayank yadav mern, mayank yadav react, mayank react, mayank hackingly" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mayank Yadav" />
        <meta property="og:description" content="Founder & Developer at ColleGPT || MERN STACK Developer || React Js Developer || Student at LDRP Institute of Technology & Research." />
        <meta property="og:image" content="https://i.ibb.co/jkLVTTR/image.png" />
        <meta property="og:url" content="https://mayank-dev.vercel.app/" /> {/* Replace with your website URL */}

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en-US" />
        
        {/* LinkedIn */}
        <meta property="linkedin:title" content="Mayank Yadav" />
        <meta property="linkedin:description" content="Founder & Developer at ColleGPT || MERN STACK Developer || React Js Developer || Student at LDRP Institute of Technology & Research." />
        <meta property="linkedin:image" content="https://i.ibb.co/QDqRccS/image.png" />

      </Head>

      <PreLoader />

      <NavBar />

      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <About />
        <Blog/>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
