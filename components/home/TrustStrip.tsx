import { AnimatedCounter } from "../shared/AnimatedCounter";
import { Reveal } from "../shared/Reveal";

export function TrustStrip() {
  type Stat =
    | { kind: "counter"; value: number; suffix: string; decimal?: boolean; label: string }
    | { kind: "text";    text: string;                                     label: string };

  const stats: Stat[] = [
    { kind: "counter", value: 4.8,   suffix: "/5",      decimal: true, label: "Google Rating"           },
    { kind: "counter", value: 48,    suffix: "K+",                     label: "Instagram Family"         },
    { kind: "counter", value: 100,   suffix: "%",                      label: "RC Transfer"              },
    { kind: "text",    text: "Sell Or Exchange",                       label: "Hassle-Free Experience"   },
    { kind: "text",    text: "15 Min",                                 label: "Deal Time"                },
  ];

  return (
    <div className="border-y border-gray-100 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="py-6 px-4 text-center">
                <p className="text-[clamp(22px,3vw,30px)] font-bold text-gray-900 leading-none tracking-tight mb-1.5">
                  {stat.kind === "counter" ? (
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      decimal={stat.decimal}
                    />
                  ) : (
                    stat.text
                  )}
                </p>
                <p className="text-[12px] text-gray-400 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}