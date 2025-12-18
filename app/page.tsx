"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, locales } from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Определяем язык браузера
    const browserLang = navigator.language.split("-")[0];
    // Проверяем, поддерживается ли этот язык
    const locale = locales.includes(browserLang as any)
      ? browserLang
      : defaultLocale;
    // Редирект на локализованную версию
    router.replace(`/${locale}`);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p>Redirecting...</p>
      </div>
    </main>
  );
}
