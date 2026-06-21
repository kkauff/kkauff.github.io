import { content } from "./content";
import Header from "./Header";
import TimelineSection from "./TimelineSection";
import ProjectsSection from "./ProjectsSection";
import SectionHeading from "./SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 max-w-5xl mx-auto">
      <Header name={content.name} bio={content.bio} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
        <section>
          <SectionHeading>Open Source Work</SectionHeading>
          <ProjectsSection />
        </section>

        <section>
          <SectionHeading>Professional Timeline</SectionHeading>
          <TimelineSection />
        </section>
      </div>
    </main>
  );
}
