import { SELL_STEPS } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { EyebrowLabel } from "../primitives/EyebrowLabel";

export function SellProcess() {
  return (
    <section
      id="process"
      className="py-[120px] bg-[#F9F8F6]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Header */}
        <Reveal className="text-center max-w-[580px] mx-auto mb-14">
          <EyebrowLabel>Selling Made Simple</EyebrowLabel>
          <h2
            id="process-heading"
            className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-4"
          >
            Sell Your Bike In{" "}
            <span className="text-[#F97316]">4 Simple Steps.</span>
          </h2>
          <p className="text-[16px] text-gray-500 leading-[1.68]">
            We handle the hard part — from valuation to paperwork — so you can
            sell with confidence.
          </p>
        </Reveal>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {SELL_STEPS.map((step, i) => (
            <motion.article
              key={step.n}
              variants={fadeUp}
              className="group relative bg-white rounded-[28px] p-7 border border-gray-100 hover:border-orange-200 hover:shadow-[0_8px_32px_rgba(249,115,22,0.08)] transition-all duration-300 cursor-default"
            >
              {/* Top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-[2.5px] rounded-t-[28px] bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Step number */}
              <span className="block text-[11px] font-bold tracking-[0.2em] text-gray-200 uppercase mb-6 select-none">
                {step.n}
              </span>

              <h3 className="text-[17px] font-bold text-gray-900 leading-[1.28] tracking-[-0.015em] mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-[1.62]">
                {step.body}
              </p>

              {/* Arrow connector (desktop only) */}
              {i < SELL_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full bg-[#FFF4ED] border border-orange-100">
                  <ArrowRight size={11} className="text-[#F97316]" />
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}