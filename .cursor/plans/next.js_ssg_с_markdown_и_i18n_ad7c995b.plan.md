---
name: Next.js SSG с MDX, i18n, темами и shadcn/ui
overview: Архитектура Next.js 16 (App Router) для полностью статического сайта с MDX файлами, поддержкой EN/RU языков, светлой/темной темой, shadcn/ui компонентами и деплоем на GitHub Pages.
todos:
  - id: cleanup-project
    content: "Очистить проект от старых файлов Gatsby: удалить gatsby-config.js, gatsby-node.js, старые зависимости, папку public (если есть), .cache, node_modules/.cache"
    status: completed
  - id: setup-nextjs
    content: "Настроить Next.js 16 проект с App Router: next.config.ts с output: export, basePath для GitHub Pages, установить зависимости"
    status: completed
    dependencies:
      - cleanup-project
  - id: setup-shadcn
    content: "Настроить shadcn/ui: установить Tailwind CSS, настроить components.json, установить необходимые компоненты shadcn"
    status: completed
    dependencies:
      - setup-nextjs
  - id: create-theme-system
    content: "Создать систему тем: next-themes провайдер, интеграция с shadcn/ui темами, компонент переключателя"
    status: completed
    dependencies:
      - setup-shadcn
  - id: create-i18n-system
    content: "Создать систему i18n: middleware для определения языка, утилиты для переводов, файлы локализации (en.json, ru.json)"
    status: completed
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
    status: completed
    dependencies:
      - setup-gh-pages
      - migrate-components
---

