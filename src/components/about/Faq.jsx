"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import {ArrowDown01Icon, ArrowUp01Icon} from '@hugeicons/core-free-icons';

const faqs = [
    {
        question: "What types of commercial kitchen setups do you offer?",
        answer:
            "We provide full-scale kitchen setups for bakeries, restaurants, and catering services, tailored to meet workflow, safety, and hygiene standards."
    },
    {
        question: "How long does a typical installation take?",
        answer:
            "Installation timelines vary, but most commercial kitchen projects are completed within 2–4 weeks depending on complexity and size."
    },
    {
        question: "What premium baking equipment do you supply?",
        answer:
            "Our range includes convection ovens, dough mixers, proofing cabinets, and artisan deck ovens from globally trusted brands."
    },
    {
        question: "Can you customize kitchen layouts for limited space?",
        answer:
            "Absolutely. We specialize in ergonomic designs that maximize productivity and efficiency, even in compact kitchen spaces."
    },
    {
        question: "Do you offer maintenance and support services?",
        answer:
            "Yes, we offer regular maintenance plans, emergency repairs, and staff training for all equipment we supply and install."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" py-16 px-4 mt-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20">
                {/* Image Section */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                    <Image
                        src="/about/img5.png" Replace with your actual image path
                        alt="Commercial kitchen setup"
                        fill
                        className="rounded-t-[50%] object-cover w-full h-full"
                    />
                </div>

                {/* FAQ Section */}
                <div>
                    <p className="font-semibold text-[#292a62] uppercase text-sm md:text-base pb-2">Frequently Asked Questions</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
                        Answers to your most asked <br /> questions
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="border-b border-gray-600 pb-4">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex justify-between items-center text-left text-lg font-medium py-4 hover:text-yellow-400 transition-colors"
                                    >
                                        <span>{index + 1}. {faq.question}</span>
                                        {isOpen ? (
                                           <HugeiconsIcon icon={ArrowUp01Icon}  className="transition-transform duration-300" />
                                        ) : (
                                            <HugeiconsIcon icon={ArrowDown01Icon}  className="transition-transform duration-300" />
                                        )}
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'} text-sm text-gray-300`}
                                    >
                                        <p className="pr-4 text-gray-700 text-lg">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
