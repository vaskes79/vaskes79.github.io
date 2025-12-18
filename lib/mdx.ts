import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { Locale } from '@/i18n/config';

export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface ProjectMDX {
  frontmatter: ProjectFrontmatter;
  slug: string;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content', 'projects');

/**
 * Получить все MDX файлы для указанной локали
 */
export function getAllProjects(locale: Locale): ProjectMDX[] {
  const localeDirectory = path.join(contentDirectory, locale);

  if (!fs.existsSync(localeDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(localeDirectory);
  const mdxFiles = fileNames.filter((name) => name.endsWith('.mdx'));

  const projects: ProjectMDX[] = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(localeDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  });

  // Сортировка по дате (новые сначала)
  return projects.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Получить все slugs для указанной локали
 */
export function getAllProjectSlugs(locale: Locale): string[] {
  const projects = getAllProjects(locale);
  return projects.map((project) => project.slug);
}

/**
 * Получить MDX файл по slug и локали
 */
export function getProjectBySlug(
  locale: Locale,
  slug: string
): ProjectMDX | null {
  const localeDirectory = path.join(contentDirectory, locale);
  const fullPath = path.join(localeDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

/**
 * Сериализовать MDX контент для рендеринга
 */
export async function serializeMDX(
  content: string
): Promise<MDXRemoteSerializeResult> {
  return serialize(content, {
    parseFrontmatter: false, // frontmatter уже распарсен через gray-matter
  });
}

