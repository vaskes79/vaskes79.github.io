#!/bin/bash

# Скрипт для проверки корректности GitHub Actions workflow

echo "🔍 Проверка GitHub Actions workflow для деплоя на GitHub Pages"
echo ""

# Проверка 1: Существование файла workflow
echo "1. Проверка существования workflow файла..."
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "   ✅ Файл .github/workflows/deploy.yml существует"
else
    echo "   ❌ Файл .github/workflows/deploy.yml не найден"
    exit 1
fi

# Проверка 2: Проверка обязательных полей в workflow
echo ""
echo "2. Проверка структуры workflow..."
WORKFLOW_FILE=".github/workflows/deploy.yml"

# Проверка наличия триггера на push
if grep -q "push:" "$WORKFLOW_FILE"; then
    echo "   ✅ Триггер на push настроен"
else
    echo "   ⚠️  Триггер на push не найден"
fi

# Проверка наличия job build
if grep -q "build:" "$WORKFLOW_FILE"; then
    echo "   ✅ Job 'build' найден"
else
    echo "   ❌ Job 'build' не найден"
fi

# Проверка наличия job deploy
if grep -q "deploy:" "$WORKFLOW_FILE"; then
    echo "   ✅ Job 'deploy' найден"
else
    echo "   ❌ Job 'deploy' не найден"
fi

# Проверка использования правильных actions
echo ""
echo "3. Проверка используемых GitHub Actions..."
REQUIRED_ACTIONS=(
    "actions/checkout@v4"
    "actions/setup-node@v4"
    "actions/configure-pages@v4"
    "actions/upload-pages-artifact@v3"
    "actions/deploy-pages@v4"
)

for action in "${REQUIRED_ACTIONS[@]}"; do
    if grep -q "$action" "$WORKFLOW_FILE"; then
        echo "   ✅ $action используется"
    else
        echo "   ⚠️  $action не найден"
    fi
done

# Проверка 4: Проверка пути к артефакту
echo ""
echo "4. Проверка пути к артефакту..."
if grep -q "path: ./out" "$WORKFLOW_FILE"; then
    echo "   ✅ Путь к артефакту настроен на ./out"
else
    echo "   ⚠️  Путь к артефакту не найден или отличается"
fi

# Проверка 5: Проверка конфигурации Next.js
echo ""
echo "5. Проверка конфигурации Next.js..."
if grep -q 'output:.*export' next.config.ts; then
    echo "   ✅ Next.js настроен для статического экспорта"
else
    echo "   ⚠️  Next.js может быть не настроен для статического экспорта"
fi

# Проверка 6: Проверка скрипта build в package.json
echo ""
echo "6. Проверка скрипта build..."
if grep -q '"build"' package.json; then
    echo "   ✅ Скрипт build найден в package.json"
    BUILD_CMD=$(grep -A 1 '"build"' package.json | grep -v '"build"' | sed 's/.*"\(.*\)".*/\1/' | head -1)
    echo "   📝 Команда сборки: $BUILD_CMD"
else
    echo "   ❌ Скрипт build не найден в package.json"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Базовая проверка завершена"
echo ""
echo "📋 Следующие шаги для полной проверки:"
echo ""
echo "1. Запустите локальную сборку:"
echo "   npm install"
echo "   npm run build"
echo ""
echo "2. Проверьте, что папка 'out/' создалась после сборки"
echo ""
echo "3. После push в main ветку:"
echo "   - Перейдите в GitHub → Actions"
echo "   - Проверьте выполнение workflow 'Deploy to GitHub Pages'"
echo "   - Убедитесь, что все шаги завершились успешно"
echo ""
echo "4. В настройках репозитория (Settings → Pages):"
echo "   - Убедитесь, что Source установлен на 'GitHub Actions'"
echo ""
echo "5. Проверьте доступность сайта по адресу:"
echo "   https://vaskes79.github.io"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

