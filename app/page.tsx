import Image from "next/image";
import { content } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">
        <Image
          src="/profile.jpeg"
          alt={content.name}
          width={160}
          height={160}
          className="rounded-full object-cover flex-shrink-0"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-name">{content.name}</h1>
          <p className="text-muted leading-relaxed">{content.bio}</p>
        </div>
      </div>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 border-b border-subtle pb-3 text-section">
          Professional Timeline
        </h2>
        <ol className="relative border-l border-subtle ml-4 space-y-8">
          {content.timeline
            .slice()
            .reverse()
            .map((item, i) => (
              <li key={i} className="ml-6">
                <span className="absolute -left-2.5 mt-1.5 h-4 w-4 rounded-full border-2 border-background bg-accent" />
                <p className="text-sm font-medium text-muted mb-0.5">
                  {item.when}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.what}
                </h3>
                {item.link && (
                  <p className="text-muted text-sm mt-1">
                    Currently building the{" "}
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:underline"
                    >
                      {item.link.label}
                    </a>
                  </p>
                )}
              </li>
            ))}
        </ol>
      </section>
    </main>
  );
}
