import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowMoveUpRightIcon } from "@hugeicons/core-free-icons";



const WorkProcess = ({steps}) => {
  return (
    <section className="bg-[#f9fbfd] py-20 px-6 sm:px-10">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-yellow-400 text-sm md:text-base font-semibold uppercase tracking-widest">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#292a62] mt-2">From Concept to Completion</h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center w-full sm:w-56 md:w-64 space-y-4 transition-all duration-300 hover:scale-[1.04]">
              <div className="w-20 h-20 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-[#292a62]">{step.id}</span>
              </div>
              <h4 className="text-lg font-semibold text-[#292a62]">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <HugeiconsIcon
                size={28}
                icon={ArrowMoveUpRightIcon}
                className="text-blue-500 hidden lg:inline-block"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
