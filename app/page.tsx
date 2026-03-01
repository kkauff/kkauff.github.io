import Image from "next/image";
import { content } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">

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

          {/* LinkedIn — 220° */}
          <a
            href="https://www.linkedin.com/in/kkauff/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-subtle hover:border-link transition-colors"
            style={{ top: 181, left: 40 }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0077B5" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub — 245° */}
          <a
            href="https://github.com/kkauff/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-subtle hover:border-link transition-colors"
            style={{ top: 146, left: 13 }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#181717" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>

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
