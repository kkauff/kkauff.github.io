export const content = {
  name: "Katie Kauffman",

  bio: "I'm a software engineer and builder focused on creating human-centered systems with real-world impact. My work spans full-stack development, product thinking, and exploratory projects. I'm especially drawn to problems where rigor and creativity meet.",

  projects: [
    {
      name: "Zenith",
      logo: "/zenith-logo.png",
      tagline: "Strength-training goal tracker",
      description:
        "Build training programs, schedule lifts across the week, log your sessions, and watch adherence and volume trend over time. Installs to your phone's home screen like a native app — no App Store needed.",
      primary: {
        href: "https://zenith-theta-puce.vercel.app/",
        label: "Open the app",
      },
      note: "Free — just sign in with your Google account.",
      links: [
        { href: "https://github.com/kkauff/zenith", label: "GitHub" },
        { href: "https://github.com/kkauff/zenith#readme", label: "How to use" },
      ],
    },
    {
      name: "Folio",
      logo: "/folio-logo.png",
      tagline: "Private, local-first Markdown journal",
      description:
        "A native desktop app for notes, journals, and diaries in plain Markdown — with optional, password-protected encryption per folder. No account, no sync, no cloud. Your writing never leaves your machine.",
      primary: {
        href: "https://github.com/kkauff/folio/releases/latest",
        label: "Download",
      },
      note: "Free for macOS, Windows & Linux.",
      links: [
        { href: "https://github.com/kkauff/folio", label: "GitHub" },
        { href: "https://github.com/kkauff/folio#readme", label: "How to use" },
      ],
    },
  ],

  timeline: [
    {
      when: "2006–2011",
      what: "Various national security software engineering internships",
    },
    {
      when: "2008–2012",
      what: "MIT - BS in Mathematics & Computer Science",
    },
    {
      when: "2012",
      what: "ETH Zurich - MISTI - Computer Graphics Lab",
    },
    {
      when: "2012–2015",
      what: "JHU APL - Software Engineer",
    },
    {
      when: "2013–2015",
      what: "JHU - MS in Computer Science",
    },
    {
      when: "2015–Present",
      what: "Palantir - FDE, Senior Architect, Defense Product Engineer",
      link: {
        href: "https://www.palantir.com/defense/sdk",
        label: "Defense OSDK",
      },
    },
  ],
};
