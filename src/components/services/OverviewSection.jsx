import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";

export default function OverviewSection({ title, subtitle, description, features }) {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-yellow-400 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          {subtitle}
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-[#292a62] mb-6">
          {title}
        </h2>

        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 border-t-4 ${feature.borderColor} bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-left`}
            >
              <HugeiconsIcon icon={feature.icon} className={`mb-4 size-10 ${feature.iconColor}`} />
              <h3 className="text-xl font-bold text-[#292a62] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
