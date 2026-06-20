export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl font-semibold mb-8 border-b border-subtle pb-3 text-section"
      style={{ fontFamily: "var(--header-font)" }}
    >
      {children}
    </h2>
  );
}
