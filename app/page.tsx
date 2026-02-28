import Image from "next/image";
import { content } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-3xl mx-auto">
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
          <h1 className="text-4xl font-bold mb-4">{content.name}</h1>
          <p className="text-gray-700 leading-relaxed">{content.bio}</p>
        </div>
      </div>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-200 pb-3">
          Professional Timeline
        </h2>
        <ol className="relative border-l border-gray-200 ml-4 space-y-8">
          {content.timeline
            .slice()
            .reverse()
            .map((item, i) => (
              <li key={i} className="ml-6">
                <span className="absolute -left-2.5 mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-gray-400" />
                <p className="text-sm font-medium text-gray-500 mb-0.5">
                  {item.when}
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.what}
                </h3>
                {item.link && (
                  <p className="text-gray-600 text-sm mt-1">
                    Currently building the{" "}
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
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
