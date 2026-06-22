"use client";
import React from "react";
import ConnectSection from "@/components/home/ConnectSection";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
  const socials = [
    { name: "GitHub", handle: "@Sohail52", url: "https://github.com/Sohail52" },
    { name: "X", handle: "@syedsohail1", url: "https://x.com/syedsohail1" },

    {
      name: "LinkedIn",
      handle: "syed-sohail-mehmood",
      url: "https://www.linkedin.com/in/syed-sohail-mehmood-848763229/",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main
        className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12"
        aria-labelledby="about-heading"
      >
        <a className="sr-only sr-only-focusable" href="#main-content">
          Skip to content
        </a>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>

        <header className="mb-12">
          <h1
            id="about-heading"
            className="text-4xl sm:text-5xl font-medium tracking-tight"
          >
            About me
          </h1>

          <div className="mt-4 flex flex-wrap gap-2 items-center" aria-hidden>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Software Developer — India
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Full-Stack Developer
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Backend Engineering Enthusiast
            </span>
          </div>

          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            I'm Syed Sohail, a Full-Stack Developer based in India with a strong interest in backend engineering, system design, and modern web technologies. I enjoy building software that is practical, scalable, and solves real-world problems.
          </p>
        </header>

        <section id="intro" className="mb-12" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-2xl font-semibold"> Introduction </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p> I enjoy turning ideas into production-ready applications. Whether it's building a project management platform, an AI-powered document assistant, or a full-stack SaaS product, I focus on creating solutions that are reliable, maintainable, and enjoyable to use. </p>
            <p> I've worked with technologies such as Next.js, TypeScript, Node.js, Java, PostgreSQL, MongoDB, Redis, and modern AI tooling. I'm particularly interested in backend engineering, system design, and understanding how large-scale systems work under the hood. </p>
          </div>
        </section>
        <section id="what-i-do" className="mb-12" aria-labelledby="what-i-do-heading">
          <h2 id="what-i-do-heading" className="text-2xl font-semibold"> What I Do </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed"> I work across the entire development stack, from building user interfaces to designing APIs, databases, and backend services. My focus is on creating scalable applications while continuously exploring system design, cloud technologies, and AI-powered solutions. </p>
          <ul className="mt-6   grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg"> Full-Stack Development </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg"> Backend Engineering </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg"> API Design & Development </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg"> Database Design </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg"> AI & RAG Applications </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg"> System Design & Scalability </li>
          </ul>
        </section>
        <section id="beyond-code" className="mb-12" aria-labelledby="beyond-code-heading">
          <h2 id="beyond-code-heading" className="text-2xl font-semibold"> Beyond Code </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed"> When I'm not building projects, I'm usually exploring backend engineering concepts, learning about distributed systems, solving programming problems, or diving into technical rabbit holes that start with a simple question and lead to a much deeper understanding of how things work. </p>
        </section>

        <section id="cta" className="py-8" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl font-semibold">
            Available for hire
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hiring a software engineer or full‑stack developer? I'm open to
            full-time roles and short-term contracts. I prefer conversations
            that start with the problem you want to solve, reach out and we can
            schedule a quick call to see if we're a fit.
          </p>

          <div className="mt-8">
            <ConnectSection socials={socials} />
          </div>
        </section>
      </main>
    </div>
  );
}
