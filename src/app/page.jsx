"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
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
      {/* ✅ Proper SEO Title and Description */}
      <Head>
        <title>Aimaire Inc | Commercial Kitchen & Franchise Solutions</title>
        <meta
          name="description"
          content="Aimaire Inc offers professional solutions for commercial kitchens, kiosks, retail displays, and franchise setups. We design, build, and deliver custom solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://aimaireinc.com/" />
      </Head>

      {loading ? (
        <LogoLoader />
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
