import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import mlogo from "../../public/mlogo.svg";

const Footer = () => {
  return (
    <motion.section
      className="h-[15vh] w-full flex items-center justify-center border-t-2 border-[#e4ded7]/30 bg-[#0E1016] pt-10 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="mx-auto flex w-[90%] flex-row items-center justify-center text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px] "
      >
        <div className="relative overflow-hidden w-12 h-12 rounded-full">
          <Link
            href="https://github.com/mayankyadav1711"
            target="_blank"
            aria-label="MYK's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <div className="absolute inset-0 transform scale-150 hover:scale-110 transition-transform duration-300 ease-in-out">
                <Image
                  src={mlogo}
                  alt="Mayank Yadav's Photo"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
