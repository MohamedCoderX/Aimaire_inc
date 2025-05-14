"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    logo: "/clients/ajfan.jpeg",
    name: "Ajfan",
    location: "Surat, India",
  },
  {
    logo: "/clients/lakevieew.jpeg",
    name: "LakeView Milk Bar",
    location: "Bangalore, India",
  },
  {
    logo: "/clients/newsri.jpeg",
    name: "New Sri Sivaramana",
    location: "Vishakapatnam, India",
  },
  {
    logo: "/clients/sarva.png",
    name: "Sarva",
    location: "Erode, India",
  },
  {
    logo: "/clients/srm.jpeg",
    name: "SRM Sweet Cakes",
    location: "Erode, India",
  },
  {
    logo: "/clients/srm.jpeg",
    name: "SRM Sweet Cakes",
    location: "Erode, India",
  },
];

const ClientShowcase = () => {
  return (
    <section className="bg-[#fdf9f6] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#292a62] mb-12">
          Trusted by <span className="text-yellow-500">Industry Leaders</span>
        </h2>

        <div className="flex gap-6 overflow-x-auto no-scrollbar px-1">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="min-w-[220px] sm:min-w-[250px] bg-white/70 backdrop-blur-md rounded-xl p-5 shadow-md border border-gray-200 flex-shrink-0 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-full h-24 sm:h-28 flex items-center justify-center mb-4">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="object-contain rounded-md max-h-full max-w-full"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-[#292a62]">{client.name}</p>
                <p className="text-sm text-gray-500">{client.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
