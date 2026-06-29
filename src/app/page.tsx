export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header / Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Rizky Widyayulianto
            </h1>
            <p className="mt-3 text-xl text-slate-600 dark:text-slate-400">
              Software Engineer
            </p>
            <p className="mt-1 text-slate-500 dark:text-slate-500">
              Building robust and scalable applications
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <ContactBadge icon="📧" text="rizky@example.com" href="mailto:rizky@example.com" />
              <ContactBadge icon="🔗" text="linkedin.com/in/rizky" href="https://linkedin.com/in/rizky" />
              <ContactBadge icon="💻" text="github.com/rizky" href="https://github.com/rizky" />
              <ContactBadge icon="📍" text="Indonesia" />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-20 sm:px-10">
        {/* About Section */}
        <section className="mb-16">
          <SectionTitle>About</SectionTitle>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Passionate software engineer with extensive experience in building modern web
              applications. Skilled in TypeScript, React, Next.js, and backend technologies.
              Strong focus on writing clean, maintainable code and delivering exceptional user
              experiences. Constantly learning and exploring new technologies to solve
              real-world problems.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-6">
            <ExperienceCard
              title="Senior Software Engineer"
              company="Tech Company Inc."
              period="Jan 2023 - Present"
              description="Led development of microservices architecture serving 1M+ users. Improved application performance by 40% through code optimization and caching strategies."
              tech={["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"]}
            />
            <ExperienceCard
              title="Software Engineer"
              company="Startup ABC"
              period="Jun 2021 - Dec 2022"
              description="Built and maintained full-stack web applications. Collaborated with cross-functional teams to deliver features on tight deadlines."
              tech={["JavaScript", "React", "Next.js", "MongoDB", "Docker"]}
            />
            <ExperienceCard
              title="Junior Developer"
              company="Web Agency XYZ"
              period="Mar 2020 - May 2021"
              description="Developed responsive websites and web applications for various clients. Contributed to internal tooling and component library."
              tech={["HTML/CSS", "JavaScript", "React", "PHP", "MySQL"]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <SectionTitle>Education</SectionTitle>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Bachelor of Computer Science
                </h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  University of Indonesia
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                2016 - 2020
              </span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCard title="Frontend" skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]} />
            <SkillCard title="Backend" skills={["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]} />
            <SkillCard title="DevOps & Tools" skills={["Docker", "AWS", "Git", "CI/CD", "Linux"]} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard."
              tech={["Next.js", "TypeScript", "Stripe", "PostgreSQL"]}
              href="#"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management tool with real-time updates, drag-and-drop, and team workspaces."
              tech={["React", "Node.js", "Socket.io", "MongoDB"]}
              href="#"
            />
            <ProjectCard
              title="Portfolio Website"
              description="Personal portfolio and blog built with Next.js and MDX for content management."
              tech={["Next.js", "MDX", "Tailwind CSS", "Vercel"]}
              href="#"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="Real-time weather dashboard with forecasts, charts, and location-based search."
              tech={["React", "Chart.js", "OpenWeather API"]}
              href="#"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Rizky Widyayulianto. Built with Next.js.</p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
      <span className="mr-3 inline-block h-6 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
      {children}
    </h2>
  );
}

function ContactBadge({ icon, text, href }: { icon: string; text: string; href?: string }) {
  const content = (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm transition-all hover:shadow-md hover:ring-blue-300 dark:bg-slate-800/80 dark:text-slate-300 dark:ring-slate-700 dark:hover:ring-blue-600">
      <span>{icon}</span>
      <span>{text}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
        {content}
      </a>
    );
  }

  return content;
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  tech,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-700">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 transition-all group-hover:from-blue-500/5 group-hover:via-blue-500/0 group-hover:to-purple-500/5 dark:group-hover:from-blue-500/10 dark:group-hover:to-purple-500/10" />
      <div className="relative">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-blue-600 dark:text-blue-400">{company}</p>
          </div>
          <span className="inline-flex shrink-0 items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {period}
          </span>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-purple-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-purple-700">
      <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-md bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:from-blue-950 dark:to-purple-950 dark:text-slate-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  href,
}: {
  title: string;
  description: string;
  tech: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700"
    >
      <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
        {title}
        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
