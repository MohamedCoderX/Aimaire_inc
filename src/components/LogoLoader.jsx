"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
          opacity: [0, 1, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/logo.png"
          alt="Aimaire inc Logo"
          width={200}
          height={200}
          className="rounded-full"
          priority
        />
      </motion.div>
    </div>
  );
};

export default LogoLoader;
