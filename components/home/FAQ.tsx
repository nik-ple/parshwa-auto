import { FAQ_ITEMS } from "@/lib/constants";
import { EASE_IN_OUT } from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useCallback } from "react";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { Reveal } from "../shared/Reveal";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = useCallback(
    (i: number) => setOpen((prev) => (prev === i ? null : i)),
    [],
  );

  return (
    <section
      className="py-[120px] bg-[#F9F8F6]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[760px] mx-auto px-5">
        <Reveal className="text-center mb-12">
          <EyebrowLabel>Questions?</EyebrowLabel>
          <h2
            id="faq-heading"
            className="text-[clamp(30px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-4"
          >
            Questions.
            <br />
            We have the <span className="text-[#F97316]">Answers.</span>
          </h2>
          <p className="text-[16px] text-gray-500 leading-[1.68]">
            Everything you need to know before selling, buying or exchanging at
            Parshwa Auto.
          </p>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[22px] border border-gray-100 overflow-hidden hover:border-orange-200 transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F97316]"
                  aria-expanded={open === i}
                >
                  <span
                    className={`text-[15px] font-semibold pr-4 leading-snug transition-colors duration-200 ${
                      open === i ? "text-[#F97316]" : "text-gray-900"
                    }`}
                  >
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: EASE_IN_OUT }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-colors duration-200 ${
                        open === i ? "text-[#F97316]" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE_IN_OUT }}
                      aria-hidden={open !== i}
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-gray-100 mb-4" />
                        <p className="text-[14.5px] text-gray-500 leading-[1.72]">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}