import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/mdx";
import { locales, type Locale } from "@/i18n/config";
import { isValidLocale } from "@/lib/i18n";

/**
 * Генерация всех статических путей для проектов
 */
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllProjectSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

/**
 * Генерация метаданных для SEO
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const project = getProjectBySlug(locale, slug);

  if (!project) {
    return {};
  }

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

/**
 * Страница проекта
 */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.frontmatter.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">
          {project.frontmatter.description}
        </p>
        {project.frontmatter.date && (
          <time
            className="text-sm text-muted-foreground"
            dateTime={project.frontmatter.date}
          >
            {new Date(project.frontmatter.date).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
        {project.frontmatter.tags && project.frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={project.content} />
      </div>
    </article>
  );
}
