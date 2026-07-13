"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";
import { faqs } from "@/data/reviews";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>("faq1");

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know about ordering, delivery, and customisation at Cake Queen."
        />
        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-bg-base rounded-2xl overflow-hidden border border-border/60 hover:border-primary/30 transition-colors duration-200"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button
                id={`faq-${faq.id}`}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                aria-expanded={open === faq.id}
              >
                <span className="font-heading font-700 text-sm md:text-base text-text-dark group-hover:text-primary transition-colors leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300 mt-0.5 ${open === faq.id ? "rotate-180 text-primary" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 font-body text-sm text-text-mid leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          className="mt-10 text-center bg-primary/5 rounded-3xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-heading font-700 text-text-dark text-lg mb-2">Still have a question?</p>
          <p className="font-body text-text-muted text-sm mb-4">আমাদের WhatsApp-এ লিখুন — আমরা 2 ঘণ্টার মধ্যে উত্তর দিই!</p>
          <a
            href="https://wa.me/918918499216?text=Hi!%20I%20have%20a%20question%20about%20ordering%20a%20cake."
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-btn"
            className="inline-flex items-center gap-2 bg-primary text-white font-heading font-700 text-sm px-6 py-3 rounded-pill shadow-btn hover:bg-primary-dark transition-all"
          >
            💬 Ask on WhatsApp
          </a>
        </motion.div>
      </div>
      <CreamDrip color="#FDF0F4" className="mt-12" />
    </section>
  );
}
