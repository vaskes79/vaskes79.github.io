---
name: Next.js SSG с MDX, i18n, темами и shadcn/ui
overview: Архитектура Next.js 16 (App Router) для полностью статического сайта с MDX файлами, поддержкой EN/RU языков, светлой/темной темой, shadcn/ui компонентами и деплоем на GitHub Pages.
todos:
  - id: cleanup-project
    content: "Очистить проект от старых файлов Gatsby: удалить gatsby-config.js, gatsby-node.js, старые зависимости, папку public (если есть), .cache, node_modules/.cache"
    status: pending
  - id: setup-nextjs
    content: "Настроить Next.js 16 проект с App Router: next.config.ts с output: export, basePath для GitHub Pages, установить зависимости"
    status: pending
    dependencies:
      - cleanup-project
  - id: setup-shadcn
    content: "Настроить shadcn/ui: установить Tailwind CSS, настроить components.json, установить необходимые компоненты shadcn"
    status: pending
    dependencies:
      - setup-nextjs
  - id: create-theme-system
    content: "Создать систему тем: next-themes провайдер, интеграция с shadcn/ui темами, компонент переключателя"
    status: pending
    dependencies:
      - setup-shadcn
  - id: create-i18n-system
    content: "Создать систему i18n: middleware для определения языка, утилиты для переводов, файлы локализации (en.json, ru.json)"
    status: pending
    dependencies:
      - setup-nextjs
  - id: create-mdx-utils
    content: "Настроить MDX: @next/mdx или next-mdx-remote, утилиты для чтения MDX файлов с frontmatter"
    status: pending
    dependencies:
      - setup-nextjs
  - id: create-content-structure
    content: Создать структуру папок content/projects/[locale]/ и добавить примеры MDX файлов
    status: pending
    dependencies:
      - create-mdx-utils
  - id: create-dynamic-routes
    content: "Создать динамические роуты для проектов: app/[locale]/projects/[slug]/page.tsx с generateStaticParams"
    status: pending
    dependencies:
      - create-i18n-system
      - create-mdx-utils
      - create-content-structure
  - id: migrate-components
    content: "Адаптировать существующие компоненты из Gatsby: заменить gatsby-link на next/link, добавить 'use client' где нужна интерактивность"
    status: pending
    dependencies:
      - setup-nextjs
  - id: setup-gh-pages
    content: "Настроить деплой на GitHub Pages: GitHub Actions workflow для автоматической сборки и деплоя"
    status: pending
    dependencies:
      - setup-nextjs
  - id: create-documentation
    content: "Создать документацию проекта в папке docs/: README, архитектура, руководство по разработке, деплой"
    status: pending
    dependencies:
      - setup-gh-pages
      - migrate-components
---

# Архитектура Next.js 16 SSG с MDX и i18n для GitHub Pages

## Общая архитектура

Сайт будет полностью статическим (SSG) с использованием **Next.js 16.x** (**App Router**) с `output: 'export'`. **MDX файлы** будут использоваться для контентных страниц (проекты, статьи), что позволяет использовать React компоненты внутри контента.

**Best Practices Next.js 16:**

- **App Router** — рекомендуемый подход для новых проектов
- **Server Components** — по умолчанию все компоненты серверные
- **generateStaticParams()** — замена устаревшим `getStaticPaths`
- **Прямая загрузка данных** — вместо `getStaticProps` данные загружаются в Server Components
- **TypeScript** — рекомендуется для типизации

**Важно**: Встроенная i18n маршрутизация (`i18n` в `next.config.js`) **не поддерживается** в App Router. Используется ручная маршрутизация через динамический сегмент `[locale]` + middleware для редиректа.

## Структура проекта (App Router)

```
/
├── content/
│   └── projects/
│       ├── en/
│       │   ├── project-1.mdx
│       │   └── project-2.mdx
│       └── ru/
│           ├── project-1.mdx
│           └── project-2.mdx
├── public/
│   ├── images/              # Оптимизированные изображения (генерируются)
│   └── images-raw/          # Исходные изображения (для оптимизации)
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx          # Layout для языка (Server Component)
│   │   │   ├── page.tsx            # Главная страница /[locale]
│   │   │   └── projects/
│   │   │       ├── page.tsx        # Список проектов /[locale]/projects
│   │   │       └── [slug]/
│   │   │           └── page.tsx    # Страница проекта /[locale]/projects/[slug]
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Корневая страница (редирект на /en или /ru)
│   │   └── globals.css
│   ├── components/
│   │   ├── PORT/                   # Существующие компоненты
│   │   ├── LIB/
│   │   ├── ui/                     # shadcn/ui компоненты
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── theme-toggle.tsx    # Переключатель темы на основе shadcn
│   │   │   └── ...                 # Другие shadcn компоненты
│   │   ├── mdx/                    # Компоненты для MDX
│   │   │   └── MDXComponents.tsx
│   │   ├── ThemeProvider.tsx       # Провайдер тем (Client Component)
│   │   └── ThemeToggle.tsx         # Переключатель темы (Client Component)
│   ├── lib/
│   │   ├── mdx.ts                  # Утилиты для MDX
│   │   ├── i18n.ts                 # Утилиты для i18n
│   │   ├── optimize-images.ts      # Утилиты для оптимизации изображений (Sharp)
│   │   └── utils.ts                # Общие утилиты
│   ├── styles/
│   │   └── globals.css             # Tailwind CSS + CSS переменные для тем (shadcn)
│   └── locales/
│       ├── en.json
│       └── ru.json
├── docs/                           # Документация проекта
│   ├── README.md                   # Обзор документации
│   ├── architecture.md             # Архитектура проекта
│   ├── development.md              # Руководство по разработке
│   ├── deployment.md                # Инструкции по деплою
│   ├── components.md               # Документация компонентов
│   ├── content.md                  # Руководство по работе с контентом (MDX)
│   └── plan.md                     # План реализации (этот файл)
├── middleware.ts                   # Middleware для i18n редиректа
├── next.config.ts                  # Конфигурация Next.js (TypeScript)
├── tailwind.config.ts              # Конфигурация Tailwind CSS (для shadcn)
├── components.json                 # Конфигурация shadcn/ui
├── tsconfig.json
└── package.json
```

## Очистка проекта от старых файлов Gatsby

Перед началом миграции на Next.js необходимо очистить проект от файлов и зависимостей Gatsby.

### Файлы для удаления:

1. **Конфигурационные файлы Gatsby:**

   - `gatsby-config.js`
   - `gatsby-node.js`
   - `gatsby-browser.js` (если есть)
   - `gatsby-ssr.js` (если есть)

2. **Папки и кэш:**

   - `.cache/` — кэш Gatsby
   - `public/` — сгенерированные файлы Gatsby (будет пересоздана Next.js)
   - `node_modules/.cache/` — кэш в node_modules

3. **Старые зависимости из package.json:**

   - `gatsby`
   - `gatsby-link`
   - `gatsby-plugin-react-helmet`
   - `gatsby-source-filesystem`
   - `gatsby-transformer-react-docgen`
   - `react-helmet` (если используется отдельно)
   - `gh-pages` (оставить, если нужен для деплоя, или заменить на GitHub Actions)

4. **Скрипты из package.json:**
   - `gatsby develop`
   - `gatsby build`
   - Старые скрипты, связанные с Gatsby

### Структура для сохранения:

**Сохранить:**

- `src/components/` — компоненты (будут адаптированы)
- `src/data/` — данные (JSON файлы, если нужны)
- `src/layouts/` — можно адаптировать под Next.js layouts
- `README.md` — обновить
- `LICENSE` — оставить
- `.gitignore` — обновить для Next.js

**Обновить:**

- `package.json` — удалить Gatsby зависимости, добавить Next.js
- `.gitignore` — добавить `.next/`, `out/`, обновить для Next.js

### Команды для очистки:

```bash
# 1. Удалить файлы Gatsby
rm gatsby-config.js gatsby-node.js
rm -rf .cache public

# 2. Удалить node_modules и package-lock.json
rm -rf node_modules package-lock.json

# 3. Обновить package.json вручную (удалить Gatsby зависимости)

# 4. Переустановить зависимости
npm install
```

**Примечание**: Компоненты из `src/components/` сохраняются, но будут адаптированы под Next.js (замена `gatsby-link` на `next/link`, добавление `'use client'` где нужно).

## Ключевые компоненты

### 1. Конфигурация Next.js (`next.config.ts`)

```typescript
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export", // SSG - статический экспорт
  trailingSlash: true, // Для GitHub Pages
  images: { unoptimized: true }, // Для статического экспорта
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // basePath: '',                     // Если репо username.github.io - пустой
  // basePath: '/repo-name',           // Если репо project page
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
```

### 2. Система i18n (App Router)

**Middleware для редиректа** (`middleware.ts`):

```typescript
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Проверяем, есть ли локаль в пути
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Редирект на локаль по умолчанию
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico).*)"],
};
```

**Утилиты для i18n** (`src/lib/i18n.ts`):

```typescript
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";

const dictionaries = { en, ru } as const;
export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ["en", "ru"];

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
```

### 3. Настройка shadcn/ui

**shadcn/ui** — набор компонентов, которые копируются в проект (не npm пакет). Работает с Tailwind CSS и поддерживает темную тему.

**Установка:**

```bash
# 1. Установить зависимости
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2. Инициализировать shadcn/ui
npx shadcn@latest init
```

**Конфигурация shadcn/ui** (`components.json`):

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

**Tailwind конфигурация** (`tailwind.config.ts`) с **Minimal Slate Theme**:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal Slate Theme - минималистичная палитра на основе серых оттенков
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

**Установка компонентов shadcn/ui:**

```bash
# Примеры компонентов для портфолио
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add theme-toggle
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add tabs
```

### 4. Система тем (Light/Dark) с shadcn/ui

Используется **next-themes** + **shadcn/ui CSS переменные** для управления темой.

**ThemeProvider** (`src/components/ThemeProvider.tsx`):

```typescript
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
```

**ThemeToggle на основе shadcn** (`src/components/ui/theme-toggle.tsx`):

```typescript
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

**CSS переменные Minimal Slate Theme** (`src/styles/globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Minimal Slate Theme - Light Mode */
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  /* Minimal Slate Theme - Dark Mode */
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**Root Layout с ThemeProvider** (`src/app/layout.tsx`):

```typescript
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

### 5. Обработка MDX (App Router)

- **@next/mdx** — официальный плагин для MDX в Next.js
- **gray-matter** — для парсинга frontmatter
- **next-mdx-remote** — для динамической загрузки MDX из файлов (альтернатива)

**Утилиты для MDX** (`src/lib/mdx.ts`):

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "projects");

export interface ProjectMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  img?: string;
  filter?: string;
}

export function getProjectSlugs(locale: string): string[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getProjectBySlug(locale: string, slug: string) {
  const filePath = path.join(contentDir, locale, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { meta: data as ProjectMeta, content };
}

export function getAllProjects(locale: string): ProjectMeta[] {
  const slugs = getProjectSlugs(locale);
  return slugs.map((slug) => {
    const filePath = path.join(contentDir, locale, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    return { ...data, slug } as ProjectMeta;
  });
}
```

**Структура MDX файла:**

```mdx
---
title: Project Name
description: Project description
filter: reCom
img: /images/project.jpg
date: 2024-01-01
---

# Project Title

Content in markdown format with **React components**:

More content...
```

### 6. Оптимизация изображений через Sharp

Изображения оптимизируются на этапе сборки с помощью Sharp для уменьшения размера и улучшения производительности.

**Утилита для оптимизации** (`src/lib/optimize-images.ts`):

```typescript
import sharp from "sharp";
import fs from "fs";
import path from "path";

const rawImagesDir = path.join(process.cwd(), "public", "images-raw");
const optimizedImagesDir = path.join(process.cwd(), "public", "images");

// Создаем папку для оптимизированных изображений
if (!fs.existsSync(optimizedImagesDir)) {
  fs.mkdirSync(optimizedImagesDir, { recursive: true });
}

async function optimizeImage(inputPath: string, outputPath: string) {
  const ext = path.extname(inputPath).toLowerCase();

  try {
    if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      await sharp(inputPath)
        .webp({ quality: 80 }) // Конвертируем в WebP с качеством 80%
        .resize(1920, 1080, {
          fit: "inside",
          withoutEnlargement: true,
        }) // Максимальный размер
        .toFile(outputPath.replace(ext, ".webp"));

      console.log(
        `✓ Optimized: ${path.basename(inputPath)} → ${path.basename(
          outputPath
        )}.webp`
      );
    }

    // Также создаем оригинальный формат с оптимизацией
    await sharp(inputPath)
      .jpeg({ quality: 85, mozjpeg: true })
      .resize(1920, 1080, { fit: "inside", withoutEnlargement: true })
      .toFile(outputPath);

    console.log(
      `✓ Optimized: ${path.basename(inputPath)} → ${path.basename(outputPath)}`
    );
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  if (!fs.existsSync(rawImagesDir)) {
    console.log("No images-raw directory found, skipping optimization");
    return;
  }

  const files = fs.readdirSync(rawImagesDir);
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to optimize...`);

  for (const file of imageFiles) {
    const inputPath = path.join(rawImagesDir, file);
    const outputPath = path.join(optimizedImagesDir, file);
    await optimizeImage(inputPath, outputPath);
  }

  console.log("✓ Image optimization complete!");
}

// Запуск при вызове скрипта
if (require.main === module) {
  optimizeAllImages().catch(console.error);
}

export { optimizeAllImages };
```

**Процесс работы:**

1. Исходные изображения кладутся в `public/images-raw/`
2. Перед сборкой запускается `npm run optimize-images`
3. Sharp оптимизирует изображения и сохраняет в `public/images/`
4. Next.js копирует оптимизированные изображения в `out/` при сборке

**Использование в компонентах:**

```tsx
import Image from "next/image";

// Используем оптимизированные изображения
<Image
  src="/images/project.webp" // или .jpg
  alt="Project"
  width={800}
  height={600}
  unoptimized={true} // Изображения уже оптимизированы
/>;
```

**Настройка в package.json:**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "npm run optimize-images && next build",
    "optimize-images": "tsx src/lib/optimize-images.ts",
    "prebuild": "npm run optimize-images"
  }
}
```

**Примечание**: `tsx` уже включен в devDependencies для запуска TypeScript скриптов.

### 7. Генерация статических страниц (App Router)

**generateStaticParams** заменяет `getStaticPaths`:

```typescript
// src/app/[locale]/projects/[slug]/page.tsx
import { getProjectSlugs, getProjectBySlug } from "@/lib/mdx";
import { locales, type Locale } from "@/lib/i18n";

// Генерация всех статических путей
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getProjectSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

// Server Component - данные загружаются напрямую
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const { meta, content } = await getProjectBySlug(locale, slug);

  return (
    <article>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      {/* Рендеринг MDX контента */}
    </article>
  );
}
```

**generateStaticParams для локали:**

```typescript
// src/app/[locale]/layout.tsx
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return <>{children}</>;
}
```

### 8. GitHub Pages деплой

**GitHub Actions workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## Файлы для создания/изменения

1. **next.config.ts** — конфигурация Next.js с MDX и статическим экспортом
2. **tsconfig.json** — TypeScript конфигурация с path aliases
3. **tailwind.config.ts** — конфигурация Tailwind CSS для shadcn/ui
4. **components.json** — конфигурация shadcn/ui
5. **postcss.config.js** — конфигурация PostCSS для Tailwind
6. **middleware.ts** — middleware для i18n редиректа
7. **package.json** — зависимости и скрипты
8. **src/app/layout.tsx** — корневой layout с ThemeProvider
9. **src/app/page.tsx** — корневая страница (редирект через middleware)
10. **src/app/[locale]/layout.tsx** — layout для локали с `generateStaticParams`
11. **src/app/[locale]/page.tsx** — главная страница для каждого языка
12. **src/app/[locale]/projects/page.tsx** — список проектов
13. **src/app/[locale]/projects/[slug]/page.tsx** — страница проекта с `generateStaticParams`
14. **src/lib/mdx.ts** — утилиты для работы с MDX файлами
15. **src/lib/i18n.ts** — утилиты для i18n
16. **src/lib/utils.ts** — утилиты (cn для shadcn)
17. **src/locales/en.json** и **src/locales/ru.json** — файлы переводов
18. **src/components/ThemeProvider.tsx** — провайдер тем (Client Component)
19. **src/components/ui/** — shadcn/ui компоненты (button, card, theme-toggle и др.)
20. **src/styles/globals.css** — Tailwind CSS + CSS переменные shadcn/ui
21. **src/components/mdx/MDXComponents.tsx** — компоненты для MDX (опционально)
22. **content/projects/en/** и **content/projects/ru/** — папки с MDX файлами
23. **.github/workflows/deploy.yml** — GitHub Actions для деплоя
24. **docs/README.md** — обзор документации проекта
25. **docs/architecture.md** — описание архитектуры проекта
26. **docs/development.md** — руководство по разработке
27. **docs/deployment.md** — инструкции по деплою
28. **docs/components.md** — документация компонентов
29. **docs/content.md** — руководство по работе с контентом (MDX)
30. **docs/plan.md** — план реализации (этот файл)

## Зависимости

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@next/mdx": "^16.0.0",
    "@mdx-js/loader": "^3.0.0",
    "@mdx-js/react": "^3.0.0",
    "gray-matter": "^4.0.3",
    "next-themes": "^0.4.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/mdx": "^2.0.0",
    "sharp": "^0.33.0",
    "tsx": "^4.7.0",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17"
  },
  "scripts": {
    "dev": "next dev",
    "build": "npm run optimize-images && next build",
    "optimize-images": "tsx src/lib/optimize-images.ts",
    "start": "next start"
  }
}
```

**Примечания:**

- **shadcn/ui** устанавливается через CLI (`npx shadcn@latest add [component]`), компоненты копируются в проект
- **Tailwind CSS** обязателен для shadcn/ui
- **lucide-react** — иконки для shadcn/ui компонентов
- **class-variance-authority** и **clsx** — утилиты для работы с классами в shadcn/ui
- **Альтернатива для MDX**: вместо `@next/mdx` можно использовать `next-mdx-remote` для более гибкой загрузки MDX из файловой системы

## Best Practices Next.js 16

### Server Components vs Client Components

```typescript
// Server Component (по умолчанию) - для статических данных
// src/app/[locale]/projects/page.tsx
import { getAllProjects } from "@/lib/mdx";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const projects = getAllProjects(locale); // Данные загружаются на сервере
  return <ProjectsList projects={projects} />;
}

// Client Component - только для интерактивности
// src/components/ProjectFilter.tsx
("use client");
import { useState } from "react";

export function ProjectFilter() {
  const [filter, setFilter] = useState("all");
  // ...интерактивная логика
}
```

### Metadata API

```typescript
// src/app/[locale]/projects/[slug]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const { meta } = await getProjectBySlug(locale, slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: meta.img ? [meta.img] : [],
    },
  };
}
```

### Path Aliases (tsconfig.json)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/locales/*": ["./src/locales/*"]
    }
  }
}
```

### Утилиты shadcn/ui (src/lib/utils.ts)

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Особенности реализации

1. **App Router** — рекомендуемый подход для Next.js 15/16
2. **Server Components** — используются по умолчанию для статических страниц
3. **Client Components** — только для интерактивных элементов (добавить `'use client'`)
4. **generateStaticParams** — заменяет `getStaticPaths` для статической генерации путей
5. **Middleware** — для редиректа с корня на локаль по умолчанию (EN)
6. **Metadata API** — для SEO метаданных вместо `next/head`
7. **Изображения** — исходные в `public/images-raw/`, оптимизируются через Sharp в `public/images/`, используется `next/image` с `unoptimized: true` (изображения уже оптимизированы)
8. **TypeScript** — рекомендуется для типизации и лучшего DX
9. **Темы (Light/Dark)** — next-themes + shadcn/ui CSS переменные, сохранение в localStorage, поддержка системных настроек
10. **Minimal Slate Theme** — минималистичная цветовая палитра на основе серых оттенков (slate), идеальна для портфолио разработчика
11. **shadcn/ui** — компоненты копируются в проект (не npm пакет), работают с Tailwind CSS, полностью кастомизируемые, поддержка темной темы из коробки

## Документация проекта

Документация проекта находится в папке `docs/` и содержит подробные инструкции по работе с проектом.

### Структура документации:

**docs/README.md** — главный файл документации:

- Обзор проекта
- Быстрый старт
- Ссылки на другие разделы документации
- Структура проекта

**docs/architecture.md** — архитектура проекта:

- Описание архитектуры Next.js 16 App Router
- Структура папок и файлов
- Маршрутизация и i18n
- Система тем (Light/Dark)
- Работа с MDX файлами
- Оптимизация изображений

**docs/development.md** — руководство по разработке:

- Установка и настройка окружения
- Команды для разработки (`npm run dev`, `npm run build`)
- Работа с компонентами
- Добавление новых страниц
- Работа с переводами (i18n)
- Тестирование

**docs/deployment.md** — инструкции по деплою:

- Настройка GitHub Pages
- GitHub Actions workflow
- Ручной деплой
- Настройка basePath
- Troubleshooting

**docs/components.md** — документация компонентов:

- Описание существующих компонентов
- shadcn/ui компоненты
- Кастомизация компонентов
- Создание новых компонентов
- Best practices

**docs/content.md** — руководство по работе с контентом:

- Структура MDX файлов
- Frontmatter метаданные
- Добавление новых проектов
- Работа с изображениями
- Локализация контента

**docs/plan.md** — план реализации (этот файл):

- Полный план миграции с Gatsby на Next.js
- Архитектурные решения
- Пошаговые инструкции

### Формат документации:

- Все файлы в формате Markdown (`.md`)
- Использование структурированных заголовков
- Примеры кода с подсветкой синтаксиса
- Диаграммы (если необходимо) в формате Mermaid
- Ссылки между разделами

### Пример структуры docs/README.md:

```markdown
# Документация проекта

Портфолио frontend-разработчика на Next.js 16 с поддержкой MDX, i18n и темной темы.

## Быстрый старт

1. Установка зависимостей: `npm install`
2. Запуск dev сервера: `npm run dev`
3. Сборка проекта: `npm run build`

## Разделы документации

- [Архитектура](./architecture.md) — описание архитектуры проекта
- [Разработка](./development.md) — руководство по разработке
- [Деплой](./deployment.md) — инструкции по деплою
- [Компоненты](./components.md) — документация компонентов
- [Контент](./content.md) — работа с MDX контентом
- [План реализации](./plan.md) — план миграции на Next.js
```

## Важные замечания для Next.js 16

1. **App Router полностью поддерживает SSG** — `output: 'export'` работает с App Router
2. **React 19** — Next.js 16 использует React 19
3. **params теперь Promise** — в Next.js 15+ params асинхронный, нужно `await params`
4. **Middleware ограничения** — с `output: 'export'` middleware работает только для редиректов, не для rewrite
5. **Нет Server Actions** — с `output: 'export'` Server Actions не работают (только статика)
6. **generateStaticParams обязателен** — для всех динамических сегментов при `output: 'export'`
