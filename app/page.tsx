
import ConnectSection from "@/components/home/ConnectSection";
import FooterMain from "@/components/home/FooterMain";
import HeaderIntro from "@/components/home/HeaderIntro";
import HomeClient from "@/components/home/HomeClient";
import JobItem from "@/components/home/JobItem";
import ProjectsList from "@/components/home/ProjectsList";
import ThoughtsList from "@/components/home/ThoughtsList";

export default function Home() {

  const jobs = [
    {
      year: "2026",
      role: "Software Engineer",
      company: "LTM | Bengaluru, India",
      description: [
        "Supported and maintained enterprise web applications built with Next.js across multiple global markets."
      ],
      tech: ["Next.js", "TypeScript", "React", "PostgreSQL"],
    },
    {
      year: "2025",
      role: "Research Intern",
      company: "RNS | Bengaluru, India",
      description: [
        "Developed and optimized deep learning models for agricultural disease classification and prediction."
      ],
      tech: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Deep Learning",
        "Computer Vision",
      ],
    },
  ];

  const projects = [
    {
      name: "NexTask",
      description:
        "A modern full-stack productivity platform for managing projects, tasks, and personal todos from a unified dashboard. Features secure authentication, project workspaces, task prioritization, progress tracking, and user-specific data isolation with a responsive, production-ready interface.",
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Auth.js",
        "Tailwind CSS"
      ],
      link: "https://nex-task-phi.vercel.app/",
      slug: "nextask",
    },
    {
      name: "MasyncAI",
      description:
        "A full-stack AI-powered platform that generates complete websites from natural language prompts with live previews, code editing, and source code export.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Express.js",
        "Google Gemini",
        "StackBlitz WebContainer"
      ],
      link: "https://masync-ai.vercel.app",
      slug: "masync-ai",
    },
    {
      name: "Valeo",
      description:
        "A web-based price tracking platform that monitors Amazon products and sends automated email alerts when prices drop. Features web scraping, scheduled price checks, and real-time product tracking.",
      tech: [
        "Next.js",
        "TypeScript",
        "BrightData",
        "Cheerio",
        "Cron Jobs",
        "Nodemailer",
      ],
      link: "https://valeo-roan.vercel.app",
      slug: "amazon-price-tracking-platform",
    },


  ];

  const thoughts = [
    {
      title:
        "When Retries Make Things Worse: Lessons from the GitHub Outage",
      excerpt:
        "A practical look at how a GitHub outage turned into a lesson on retry storms, exponential backoff, circuit breakers, and building fault-tolerant distributed systems.",
      date: "Jun 2026",
      readTime: "6 min",
      slug: "when-retries-make-things-worse-lessons-from-the-github-outage",
    },
    {
      title:
        "Understanding SSR, CSR and SSG in Next.js",
      excerpt:
        "A practical guide to understanding SSR, CSR, and SSG in Next.js, why they exist, how they work, and the trade-offs behind each rendering strategy.",
      date: "Jun 2026",
      readTime: "6 min",
      slug: "understanding-ssr-csr-and-ssg-in-nextjs",
    },
  ];

  const socials = [
    { name: "GitHub", handle: "@Sohail52", url: "#" },
    {
      name: "X (Formerly Twitter)",
      handle: "@syedsohail",
      url: "https://x.com/syedsohail1",
    },
    {
      name: "LinkedIn",
      handle: "@syed-sohail",
      url: "https://www.linkedin.com/in/syed-sohail-mehmood-848763229/",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <HomeClient />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header id="intro" className="min-h-screen flex items-center">
          <HeaderIntro />
        </header>

        <section id="work" className="min-h-screen py-20 sm:py-32">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-medium">
                Experience
              </h2>
              <div className="text-sm text-muted-foreground font-mono">
                2025 - {new Date().getFullYear()}
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {jobs.map((job, index) => (
                <div key={index} className="space-y-8 sm:space-y-12">
                  <JobItem job={job} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <ProjectsList projects={projects} />
        </section>

        <section
          id="thoughts"
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <ThoughtsList posts={thoughts} />
        </section>

        <section id="connect" className="py-20 sm:py-32">
          <ConnectSection socials={socials} />
        </section>

        <FooterMain />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
