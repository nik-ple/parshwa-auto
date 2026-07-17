export function EyebrowLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${
        light ? "text-orange-400" : "text-[#F97316]"
      }`}
    >
      {children}
    </p>
  );
}