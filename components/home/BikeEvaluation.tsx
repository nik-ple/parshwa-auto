import { ACCEPTED_BRANDS } from "@/lib/constants";
import { wa } from "@/utils/WhatsApp";
import { ArrowRight, Check } from "lucide-react";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { Reveal } from "../shared/Reveal";

export function BikeEvalSection() {
  const checklist = [
    "Up to 5 Years Old",
    "Below 10,000 km",
    "Complete RC",
    "Insurance Preferred",
    "Well Maintained",
  ];

  return (
    <section
      className="py-[120px] bg-[#F9F8F6]"
      aria-labelledby="eval-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left */}
          <Reveal>
            <EyebrowLabel>Sell Your Bike</EyebrowLabel>
            <h2
              id="eval-heading"
              className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-4"
            >
              Wondering If We&apos;ll Buy
              <br />
              <span className="text-[#F97316]">Your Bike?</span>
            </h2>
            <p className="text-[16px] text-gray-500 leading-[1.7] mb-8 max-w-[400px]">
              We&apos;ll buy everything from daily commuters to premium
              motorcycles. If it has two wheels, we&apos;re interested.
            </p>

            {/* Accepted brand tags */}
            <div className="flex flex-wrap gap-2 mb-9">
              {ACCEPTED_BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-[13px] font-medium text-gray-700 hover:border-[#F97316] hover:text-[#F97316] transition-colors duration-200 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>

            <a
              href={wa("Hi! I want to send bike photos for evaluation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 bg-[#F97316] hover:bg-[#EA6400] text-white text-[14.5px] font-semibold rounded-[18px] transition-all duration-200 shadow-[0_4px_14px_rgba(249,115,22,0.28)] hover:shadow-[0_8px_22px_rgba(249,115,22,0.38)] active:scale-[0.97]"
            >
              Send Bike Photos
              <ArrowRight size={13} strokeWidth={2.5} />
            </a>
          </Reveal>

          {/* Right — checklist card */}
          <Reveal delay={0.12}>
            <div className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <h3 className="text-[17px] font-bold text-gray-900 mb-6 tracking-[-0.01em]">
                What We Usually Look For
              </h3>
              <ul className="space-y-4" role="list">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FFF4ED] border border-orange-200 flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-[#F97316]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14.5px] text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-[13px] text-gray-400 leading-[1.65] mb-3">
                  Unsure? We evaluate each bike individually. Not meeting one
                  condition doesn&apos;t mean we&apos;ll reject it.
                </p>
                <a
                  href={wa("Hi! I want to check if Parshwa Auto will buy my bike.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-[#F97316] font-semibold hover:text-[#EA6400] transition-colors"
                >
                  WhatsApp Review <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}