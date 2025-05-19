import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function WhyChooseAimaire({features,title,description}) {
  

  return (
    <section className="relative bg-[#12132d] text-white py-28 px-6 md:px-12 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl z-0" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h5 className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-4">
          Why Choose Aimaire?
        </h5>
        <h2 className="text-4xl md:text-4xl font-bold leading-tight">
         {title}
        </h2>
        <p className="text-white/70 mt-4 text-lg">
          {description}
        </p>
      </div>

      {/* Features Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            <CheckCircleIcon className="w-7 h-7 text-yellow-400" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Image */}
      

    </section>
  );
}
