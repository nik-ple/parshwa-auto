import { EXCHANGE_STEPS } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { Reveal } from "../shared/Reveal";
import { wa } from "@/utils/WhatsApp";

export function ExchangeSection() {
  return (
    <section
      id="exchange"
      className="py-[120px] bg-white"
      aria-labelledby="exchange-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Top — copy + calc card */}
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">

          {/* Left — copy */}
          <Reveal>
            <EyebrowLabel>Exchange Program</EyebrowLabel>
            <h2
              id="exchange-heading"
              className="text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900 mb-5"
            >
              Upgrade Your Ride.<br />
              Without the Hassle.
            </h2>
            <p className="text-[17px] text-gray-500 leading-[1.72] max-w-[420px] mb-9">
              Trade in your current motorcycle, choose your next ride, and let
              us take care of valuation, paperwork and payment.
            </p>
            <a
              href={wa("Hi! I'm interested in the bike Exchange program at Parshwa Auto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 bg-[#F97316] hover:bg-[#EA6400] text-white text-[14.5px] font-semibold rounded-[18px] transition-all duration-200 shadow-[0_4px_14px_rgba(249,115,22,0.28)] hover:shadow-[0_8px_22px_rgba(249,115,22,0.38)] active:scale-[0.97]"
            >
              Talk on WhatsApp →
            </a>
          </Reveal>

          {/* Right — Exchange calculator card */}
          <Reveal delay={0.15}>
            <div className="bg-[#F9F8F6] rounded-[28px] p-2 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100">
              <div className="space-y-2">
                {/* Old bike */}
                <div className="bg-white rounded-[22px] px-5 py-4 flex items-center justify-between border border-gray-100">
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1">
                      Your Old Bike
                    </p>
                    <p className="text-[15.5px] font-semibold text-gray-900">
                      Classic 350 2021
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[18px] font-bold text-gray-900 tabular-nums">
                      Rs. 1,05,500
                    </p>
                    <p className="text-[10.5px] text-gray-400 mt-0.5">Estimated value</p>
                  </div>
                </div>

                {/* Swap icon */}
                <div className="flex items-center justify-center py-0.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFF4ED] border border-orange-100 flex items-center justify-center">
                    <RefreshCw size={13} className="text-[#F97316]" />
                  </div>
                </div>

                {/* New bike */}
                <div className="bg-white rounded-[22px] px-5 py-4 flex items-center justify-between border border-gray-100">
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1">
                      New Bike
                    </p>
                    <p className="text-[15.5px] font-semibold text-gray-900">
                      Triumph Scrambler 400
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[18px] font-bold text-gray-900 tabular-nums">
                      Rs. 2,35,000
                    </p>
                    <p className="text-[10.5px] text-gray-400 mt-0.5">Showroom price</p>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-[#F97316] rounded-[22px] px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-orange-100 mb-1">
                      Estimated Upgrade Amount
                    </p>
                    <p className="text-[12.5px] text-orange-100/75">You pay the difference</p>
                  </div>
                  <p className="text-[24px] font-bold text-white tabular-nums">
                    Rs. 1,29,500
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom — Exchange steps */}
        <div className="border-t border-gray-100 pt-14">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {EXCHANGE_STEPS.map((step) => (
              <motion.div key={step.n} variants={fadeUp} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#FFF4ED] border border-orange-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[13px] font-bold text-[#F97316]">{step.n}</span>
                </div>
                <h4 className="text-[14.5px] font-bold text-gray-900 mb-1.5 tracking-[-0.01em]">
                  {step.title}
                </h4>
                <p className="text-[13px] text-gray-400 leading-[1.56]">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}