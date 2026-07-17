import { REVIEWS } from "@/lib/constants";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { CONFIG } from "@/lib/site";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { Reveal } from "../shared/Reveal";

export function ReviewsSection() {
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % REVIEWS.length),
      4200,
    );
    return () => clearInterval(id);
  }, []);

  const advance = useCallback(
    () => setActive((p) => (p + 1) % REVIEWS.length),
    [],
  );

  return (
    <section
      id="reviews"
      className="py-[120px] bg-white"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — stacked cards */}
          <div
            className="relative h-[320px] cursor-pointer select-none"
            onClick={advance}
            role="button"
            aria-label="Next review"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && advance()}
          >
            {REVIEWS.slice(0, 4).map((review, i) => {
              const slot = ((i - active) % REVIEWS.length + REVIEWS.length) % REVIEWS.length;
              if (slot > 2) return null;
              return (
                <motion.div
                  key={`${review.name}-${active}`}
                  className="absolute inset-0 bg-white border border-gray-100 rounded-[28px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                  animate={{
                    y:      slot * 18,
                    scale:  1 - slot * 0.04,
                    zIndex: 10 - slot,
                    filter: slot === 0 ? "none" : `brightness(${1 - slot * 0.1})`,
                  }}
                  transition={{ duration: 0.48, ease: EASE_OUT_EXPO }}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.stars)].map((_, j) => (
                      <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[15.5px] text-gray-700 leading-[1.68] mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[13px] font-bold text-gray-500">
                        {review.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-[13.5px] font-semibold text-gray-900">{review.name}</p>
                      <p className="text-[11.5px] text-gray-400">{review.bike}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right — heading + controls */}
          <Reveal delay={0.1}>
            <EyebrowLabel>Google Reviews</EyebrowLabel>
            <h2
              id="reviews-heading"
              className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-4"
            >
              Thousands Of Riders.<br />
              One <span className="text-[#F97316]">Trusted</span> Destination.
            </h2>
            <p className="text-[16px] text-gray-500 leading-[1.7] mb-8 max-w-[400px]">
              See why riders from PCMC and Pune trust Parshwa Auto for buying,
              selling and exchanging their motorcycles.
            </p>

            {/* Dot navigation */}
            <div className="flex items-center gap-2 mb-9">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-7 bg-[#F97316]"
                      : "w-1.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <a
              href={CONFIG.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 border border-gray-200 rounded-[18px] text-[14px] font-semibold text-gray-700 hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200"
            >
              See all Reviews
              <ArrowUpRight size={13} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}