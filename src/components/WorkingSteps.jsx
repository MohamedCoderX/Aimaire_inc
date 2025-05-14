'use client';

import { 
  BriefcaseIcon, 
  PencilSquareIcon, 
  Cog6ToothIcon, 
  WrenchScrewdriverIcon, 
  LifebuoyIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "We understand your vision and create a customized plan.",
    icon: BriefcaseIcon,
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "Our expert designers create layouts and interior designs for your space.",
    icon: PencilSquareIcon,
  },
  {
    id: 3,
    title: "Equipment Selection",
    description: "We provide all the equipment necessary for your business operations.",
    icon: Cog6ToothIcon,
  },
  {
    id: 4,
    title: "Installation & Setup",
    description: "We handle everything from installation to the final touches.",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "Our team ensures smooth operations with maintenance and support.",
    icon: LifebuoyIcon,
  },
];

export default function WorkingSteps() {
  return (
    <section className="py-16 bg-[#292a62] text-white relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold">Our Easy Process</h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">Step-by-step to your perfect business setup</p>
        </div>

        <div className="relative">
          {/* Responsive Dotted Line */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[85%] h-1 border-t border-dashed border-white z-0 hidden md:block"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative px-4"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-600 mb-4">
                  <step.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mt-2">{step.description}</p>

                {/* Step Number Badge */}
                <div className="absolute -top-6 bg-yellow-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
