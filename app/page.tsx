import Image from "next/image";
import { content } from "./content";
import TimelineSection from "./TimelineSection";
import SocialButtons from "./SocialButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">

        {/* Profile image + orbiting social buttons */}
        <div className="relative flex-shrink-0" style={{ width: 240, height: 240 }}>
          <Image
            src="/profile.jpeg"
            alt={content.name}
            width={160}
            height={160}
            className="rounded-full object-cover absolute"
            style={{ top: 40, left: 40 }}
            priority
          />

          <SocialButtons />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 text-name" style={{ fontFamily: "var(--header-font)" }}>{content.name}</h1>
          <p className="text-muted leading-relaxed">{content.bio}</p>
        </div>
      </div>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 border-b border-subtle pb-3 text-section" style={{ fontFamily: "var(--header-font)" }}>
          Professional Timeline
        </h2>
        <TimelineSection />
      </section>
    </main>
  );
}
