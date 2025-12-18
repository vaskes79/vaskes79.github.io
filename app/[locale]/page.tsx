import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/mdx";
import { isValidLocale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = getTranslations(locale);

  return {
    title: t.common.title,
    description: t.common.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const allProjects = getAllProjects(locale);
  const t = getTranslations(locale);

  // Дедупликация проектов по slug
  const projectsMap = new Map<string, (typeof allProjects)[0]>();
  for (const project of allProjects) {
    if (!projectsMap.has(project.slug)) {
      projectsMap.set(project.slug, project);
    }
  }
  const projects = Array.from(projectsMap.values());

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-end items-center">
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex gap-2">
              <Link
                href="/en"
                className={`px-3 py-1 rounded ${
                  locale === "en"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                EN
              </Link>
              <Link
                href="/ru"
                className={`px-3 py-1 rounded ${
                  locale === "ru"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                RU
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">{t.common.title}</h1>
            <p className="text-xl text-muted-foreground">
              {t.common.description}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/${locale}/projects/${project.slug}`}
                className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {project.frontmatter.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.frontmatter.description}
                </p>
                {project.frontmatter.date && (
                  <time
                    className="text-sm text-muted-foreground"
                    dateTime={project.frontmatter.date}
                  >
                    {new Date(project.frontmatter.date).toLocaleDateString(
                      locale,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </time>
                )}
                {project.frontmatter.tags &&
                  project.frontmatter.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
