export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-xl mb-8">
          Built with Next.js, TypeScript, and deployed on GitHub Pages
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Fast</h2>
            <p>Optimized for performance with static generation</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Modern</h2>
            <p>Built with the latest web technologies</p>
          </div>
        </div>
      </div>
    </main>
  );
}
