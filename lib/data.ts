// Project and blog post data structures with SEO metadata
export interface Project {
  id?: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  year: string;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface BlogPost {
  id?: string;
  slug?: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "nextask",
    name: "NexTask - Full-Stack Project & Task Management Platform",
    description:
      "A modern full-stack productivity platform for managing projects, tasks, and personal todos with secure authentication and user-specific workspaces.",
    longDescription: `
NexTask is a full-stack project management platform that helps users organize projects, track tasks, and manage personal todos from a single dashboard.

**Key Features**
- Secure authentication and protected routes using Auth.js.
- Create, manage, and track projects, tasks, and personal todos.
- User-specific workspaces with complete data isolation.
- Responsive dashboard with productivity insights and workspace statistics.

**Technical Highlights**
- Built with Next.js App Router, TypeScript, and Tailwind CSS.
- Designed a relational database schema using PostgreSQL and Prisma ORM.
- Implemented secure session management and route protection with Auth.js.
- Developed reusable UI components for scalable feature development.
`,
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "Tailwind CSS",
    ],
    link: "https://nex-task-phi.vercel.app/",
    github: "https://github.com/Sohail52/NexTask",
    year: "2025",
  }
  ,
  {
    slug: "masync-ai",
    name: "MasyncAI - AI-Powered Website Generation Platform",
    description:
      "A full-stack AI platform that transforms natural language prompts into fully functional websites with live previews, code editing, and source code export.",

    longDescription: `
MasyncAI is an AI-powered website generation platform that enables users to create complete websites from simple text prompts. The platform combines AI-generated code, live browser previews, and code editing into a seamless development experience.

**Key Features**
- Generate complete websites from natural language prompts using AI.
- Live browser-based previews powered by StackBlitz WebContainers.
- Built-in code editor with real-time updates and modifications.
- Export generated projects as source code for further development.

**Technical Highlights**
- Built with React, TypeScript, Tailwind CSS, and Express.js.
- Integrated Google Gemini for prompt-to-code generation.
- Leveraged StackBlitz WebContainers for in-browser code execution.
- Designed an end-to-end workflow from prompt input to downloadable source code.
`,
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Google Gemini",
      "StackBlitz WebContainer",
    ],
    link: "https://masync-ai.vercel.app",
    github: "https://github.com/Sohail52/MasyncAI",
    year: "2025",
  },
  {
    slug: "amazon-price-tracking-platform",
    name: "Valeo - Amazon Price Tracking Platform",
    description:
      "A web-based price tracking platform that monitors Amazon products and sends automated email alerts when prices drop.",

    longDescription: `
Valeo is a product price tracking platform that helps users monitor Amazon products and receive notifications when prices decrease. The platform automates product tracking through web scraping and scheduled background jobs, eliminating the need for manual price checks.

**Key Features**
- Track Amazon products using product URLs.
- Automated price monitoring with scheduled checks.
- Email notifications when tracked products reach lower prices.
- Simple interface for managing tracked products.

**Technical Highlights**
- Built with Next.js, TypeScript, and Tailwind CSS.
- Implemented web scraping using BrightData and Cheerio.
- Automated recurring price checks using Cron Jobs.
- Integrated Nodemailer for real-time email notifications.
`,
    tech: [
      "Next.js",
      "TypeScript",
      "BrightData",
      "Cheerio",
      "Cron Jobs",
      "Nodemailer",
      "Tailwind CSS",
    ],
    link: "https://valeo-roan.vercel.app",
    github: "https://github.com/Sohail52/Valeo",
    year: "2025",
  },
  {
    slug: "docbot",
    name: "DocBot - AI-Powered PDF Chat Assistant",
    description:
      "A RAG-based document intelligence platform that enables users to upload PDFs and have context-aware conversations using semantic search and AI-generated responses.",

    longDescription: `
DocBot is an AI-powered PDF chat assistant that allows users to interact with documents through natural language conversations. By combining Retrieval-Augmented Generation (RAG), vector search, and large language models, it delivers accurate answers grounded in uploaded PDF content.

**Key Features**

* Upload and chat with PDF documents using natural language.
* Semantic search powered by vector embeddings and Qdrant.
* Real-time AI response streaming for an interactive chat experience.
* Background document processing with status tracking and file management.

**Technical Highlights**

* Built with Next.js, TypeScript, MongoDB, and Tailwind CSS.
* Implemented a RAG pipeline using LangChain and Google Gemini.
* Utilized BullMQ and Redis for asynchronous PDF ingestion and processing.
* Leveraged Qdrant for vector storage and semantic similarity search.
  `,
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Qdrant",
      "Redis",
      "BullMQ",
      "LangChain",
      "Google Gemini",
      "Tailwind CSS",
    ],
    link: "https://github.com/Sohail52/Docbot",
    github: "https://github.com/Sohail52/Docbot",
    year: "2025",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-ssr-csr-and-ssg-in-nextjs",
    title: "Understanding SSR, CSR and SSG in Next.js",
    excerpt:
      "A practical guide to understanding SSR, CSR, and SSG in Next.js, why they exist, how they work, and the trade-offs behind each rendering strategy.",
    date: "Jun 2026",
    readTime: "6 min",
    tags: ["nextjs", "react", "rendering", "web performance", "frontend"],
    featured: true,
    content: `
Modern web applications are expected to be fast, SEO-friendly, and highly interactive.

The challenge is that not every page has the same requirements.

A blog post, an ecommerce product page, and an admin dashboard all serve different purposes. Yet many developers initially assume every page should be rendered the same way.

This is where Next.js becomes powerful.

It gives us multiple rendering strategies, each optimized for different scenarios.

Understanding when to use SSR, CSR, and SSG can dramatically improve performance, SEO, and user experience.

## The Problem

Let's say we're building three completely different pages:

\`\`\`text

1. Admin Dashboard
2. Product Page
3. Blog Article
   \`\`\`

At first, they seem similar.

They're all web pages.

They're all built using React.

They're all displayed inside a browser.

So why not render them all the same way?

Because each page has different priorities.

\`\`\`text
Admin Dashboard
↓
Interactivity

Product Page
↓
Fresh Data + SEO

Blog Article
↓
Speed + SEO
  \`\`\`

And that's where things get interesting.

## The Browser-First Approach (CSR)

For years, React applications followed a simple pattern.

\`\`\`text
Browser
↓
Download JavaScript
↓
Execute React
↓
Fetch Data
↓
Render UI
  \`\`\`

The browser does almost everything.

This became known as Client Side Rendering (CSR).

The approach works great for dashboards and highly interactive applications.

But there was a problem.

Search engines don't enjoy waiting for your JavaScript to finish loading.

Neither do users.

That's why many React applications started showing this:

\`\`\`text
Loading...
Loading...
Loading...
\`\`\`

Developers loved CSR.

Users didn't always love the waiting.

## The Server Says: Let Me Help (SSR)

To solve this problem, frameworks like Next.js introduced Server Side Rendering.

Instead of asking the browser to build the page:

\`\`\`text
Browser Request
↓
Server Builds HTML
↓
Ready Page Returned
  \`\`\`

The user immediately receives content.

No waiting for React to fetch critical information.

This made ecommerce, blogs, and SEO-heavy websites significantly better.

But a new question appeared.

Why build the same page thousands of times if it barely changes?

## The "Build It Once" Idea (SSG)

Imagine a blog article.

The content might stay unchanged for weeks.

Generating it repeatedly makes little sense.

So Next.js introduced another strategy.

\`\`\`text
Build Time
↓
Generate HTML Once
↓
Store Static File
↓
Serve Instantly
  \`\`\`

This became Static Site Generation.

Instead of generating pages per request, the work happens before users even arrive.

The result?

Extremely fast websites.

## Three Strategies, One Question

When developers learn SSR, CSR, and SSG, they often treat them as separate concepts.

They're not.

They're simply three answers to one question:

**Where should the HTML be created?**

\`\`\`text
Browser
↓
CSR

Server Request Time
↓
SSR

Build Time
↓
SSG
  \`\`\`

That's the entire story.

Everything else is just trade-offs.

## Final Thought

SSR, CSR, and SSG each have their place.

Every choice improves something and sacrifices something else.
`,
  },

  {
    id: "2",
    slug: "when-retries-make-things-worse-lessons-from-the-github-outage",
    title: "When Retries Make Things Worse: Lessons from the GitHub Outage",
    excerpt:
      "A practical look at how a GitHub outage turned into a lesson on retry storms, circuit breakers, exponential backoff, and building fault-tolerant distributed systems.",
    date: "Jun 2026",
    readTime: "6 min",
    tags: ["distributed systems", "system design", "fault tolerance", "retry storms", "circuit breaker"],
    featured: true,
    content: `
Distributed systems often fail in unexpected ways.

Sometimes it's a database outage. Sometimes it's a networking issue. Sometimes a dependency becomes unavailable.

However, some of the most interesting failures happen when clients behave exactly as they were designed to.

A recent GitHub outage is a great example of this.

## The Incident

GitHub experienced an outage where a portion of API requests started receiving \`401 Unauthorized\` responses.

Under normal circumstances, a \`401\` response usually indicates an expired or invalid token.

Most applications handle this automatically:

\`\`\`text
401 Unauthorized
↓
Refresh Token
↓
Retry Request
  \`\`\`

This is the correct behavior.

However, the issue wasn't an expired token.

The credentials were valid, but the authentication layer was incorrectly returning \`401 Unauthorized\` responses for legitimate requests.

From the client's perspective, the response looked completely normal, which is what made the incident interesting.

## When Correct Behavior Creates More Problems

Imagine thousands of applications communicating with GitHub.

Each application receives a \`401 Unauthorized\` response.

Each application assumes its token has expired.

As a result, every application immediately attempts to refresh its token.

\`\`\`text
App 1 → Refresh Token
App 2 → Refresh Token
App 3 → Refresh Token
...
App 10000 → Refresh Token
  \`\`\`

At first glance, this seems reasonable.

After all, refreshing a token after receiving a \`401\` is exactly what the client is supposed to do.

The problem is that all clients are doing it simultaneously.

Now the authentication infrastructure must handle:

* Original API requests
* Token refresh requests
* Retried requests

What started as an authentication issue quickly becomes a traffic problem.

## Understanding Retry Storms

Retries are one of the most common reliability techniques in distributed systems.

They work well for:

* Temporary network failures
* Short-lived service disruptions
* Transient timeouts

However, retries can become harmful when the dependency itself is struggling.

More failures lead to more retries.

More retries create additional load.

Additional load leads to more failures.

\`\`\`text
Failure
↓
Retry
↓
More Load
↓
More Failures
↓
More Retries
  \`\`\`

This feedback loop is known as a **Retry Storm**.

A small issue can quickly grow into a much larger outage if enough clients continuously retry failed operations.

## The Problem With Blind Retries

Consider the following logic:

\`\`\`javascript
while (response.status === 401) {
  refreshToken();
  retryRequest();
}
\`\`\`

The logic appears reasonable.

However, if the authentication service itself is unhealthy, the application enters a continuous cycle:

\`\`\`text
401
↓
Refresh Token
↓
401
↓
Refresh Token
↓
401
↓
Refresh Token
  \`\`\`

One application doing this is unlikely to cause problems.

Thousands of applications doing it simultaneously is a different story.

Instead of helping the service recover, clients continuously add more work to an already overloaded system.

## Exponential Backoff

A better approach is to slow down retries after repeated failures.

For example:

\`\`\`text
Retry #1 → Wait 1 second
Retry #2 → Wait 2 seconds
Retry #3 → Wait 4 seconds
Retry #4 → Wait 8 seconds
  \`\`\`

This technique is called **Exponential Backoff**.

Rather than repeatedly sending requests as fast as possible, clients gradually increase the delay between retry attempts.

This reduces pressure on the dependency and gives it time to recover.

## Circuit Breakers

Sometimes even exponential backoff isn't enough.

At some point, the application should recognize that the issue may not be temporary.

This is where the **Circuit Breaker Pattern** becomes useful.

\`\`\`text
Failure
↓
Failure
↓
Failure
↓
Circuit Opens
↓
Stop Requests
↓
Wait
↓
Try Again Later
  \`\`\`

Instead of continuously retrying, the application temporarily stops sending requests and allows the dependency time to recover.

A circuit breaker prevents a failing service from being overwhelmed by additional traffic during an incident.

## Building Fault-Tolerant Systems

One of the key lessons from this outage is that reliability isn't simply about adding retries.

Reliable systems are designed to fail gracefully.

Modern distributed systems commonly use:

* Retries
* Exponential Backoff
* Circuit Breakers
* Timeouts
* Rate Limiting
* Monitoring and Alerting

Together, these patterns help prevent small failures from becoming large-scale outages.

## Final Thought

The interesting part of this outage wasn't the authentication failure.

It was the fact that thousands of applications did exactly what they were supposed to do and still made the situation worse.

In distributed systems, the challenge isn't just handling failures.

It's making sure your recovery strategy doesn't become the next failure.
`
  }
];



