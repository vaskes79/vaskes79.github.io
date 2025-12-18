# Руководство по разработке

## Требования

- Node.js 18+ 
- npm или yarn

## Установка

1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd vaskes79.github.io
```

2. Установите зависимости:
```bash
npm install
```

## Разработка

### Запуск dev-сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для production

```bash
npm run build
```

Статические файлы будут сгенерированы в папке `out/`.

### Предпросмотр production сборки

```bash
npm run start
```

Или используйте статический сервер для папки `out/`:
```bash
npx serve out
```

## Добавление нового проекта

1. Создайте MDX файл в соответствующей папке локализации:
   - `content/projects/en/my-project.mdx` - для английской версии
   - `content/projects/ru/my-project.mdx` - для русской версии

2. Добавьте frontmatter в начало файла:
```mdx
---
title: "Название проекта"
description: "Краткое описание"
date: "2024-01-01"
tags: ["tag1", "tag2"]
---

Ваш контент здесь...
```

3. После сохранения файла, страница будет доступна по адресу:
   - `/en/projects/my-project`
   - `/ru/projects/my-project`

## Работа с локализацией

### Добавление нового перевода

1. Откройте файл локализации: `lib/locales/en.json` или `lib/locales/ru.json`
2. Добавьте новый ключ и значение:
```json
{
  "navigation": {
    "home": "Home",
    "projects": "Projects"
  }
}
```

3. Используйте в компонентах:
```typescript
import { useTranslation } from '@/lib/i18n';

export function Component() {
  const t = useTranslation();
  return <h1>{t('navigation.home')}</h1>;
}
```

## Работа с темами

Темы управляются через компонент `ThemeProvider` из `next-themes`. 

### Добавление переключателя темы

```typescript
'use client';

import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}
```

## Работа с shadcn/ui компонентами

### Установка нового компонента

```bash
npx shadcn-ui@latest add button
```

Компонент будет установлен в `components/ui/`.

### Использование компонента

```typescript
import { Button } from '@/components/ui/button';

export function MyComponent() {
  return <Button>Click me</Button>;
}
```

## Структура компонентов

Компоненты находятся в папке `components/`:

- `components/ui/` - компоненты shadcn/ui
- `components/` - кастомные компоненты проекта

## Линтинг и форматирование

### Проверка кода

```bash
npm run lint
```

### Автоисправление

```bash
npm run lint -- --fix
```

## Отладка

### Проблемы с темами

Если темы не работают, проверьте:
1. `ThemeProvider` обернут вокруг всего приложения в `app/[locale]/layout.tsx`
2. В `globals.css` подключены CSS-переменные для тем
3. `next-themes` правильно настроен

### Проблемы с MDX

Если MDX файлы не обрабатываются:
1. Проверьте конфигурацию MDX в `next.config.ts`
2. Убедитесь, что файлы находятся в `content/projects/[locale]/`
3. Проверьте формат frontmatter в MDX файлах

### Проблемы с локализацией

Если локализация не работает:
1. Проверьте middleware в `middleware.ts`
2. Убедитесь, что файлы локализации существуют в `lib/locales/`
3. Проверьте использование `useTranslation` в компонентах

## Git workflow

1. Создайте новую ветку для фичи:
```bash
git checkout -b feature/my-feature
```

2. Внесите изменения и закоммитьте:
```bash
git add .
git commit -m "feat: add new feature"
```

3. Отправьте изменения:
```bash
git push origin feature/my-feature
```

4. Создайте Pull Request в GitHub

## Полезные команды

- `npm run dev` - запуск dev-сервера
- `npm run build` - сборка production версии
- `npm run lint` - проверка кода линтером
- `npm run type-check` - проверка типов TypeScript (если настроено)

