import { useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function AnimatedCounter({
  target,
  suffix = "",
  decimal = false,
}: {
  target: number;
  suffix?: string;
  decimal?: boolean;
}) {
  const [value, setValue] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration  = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(decimal ? Math.round(eased * target * 10) / 10 : Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, decimal]);

  return (
    <span ref={ref}>
      {decimal ? value.toFixed(1) : value.toLocaleString()}
      {suffix}
    </span>
  );
}