"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoLoader from "@/components/LogoLoader";
import Home from "@/Home";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
<LogoLoader/>
) : (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    
    <Home />
  
  </motion.div>
)}

    </>
  );
};

export default Page;