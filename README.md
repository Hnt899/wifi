# WiFi Verify - Коммерческое предложение

Одностраничный Web-CP (Commercial Proposal) для сервиса WiFi Verify.

## Технологии

- React 18
- TypeScript
- Vite
- Framer Motion (анимации)
- CSS Modules

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка проекта
npm run build

# Превью production сборки
npm run preview
```

Проект откроется по адресу `http://localhost:5173`

## Структура проекта

```
src/
 ├─ sections/          # Секции коммерческого предложения
 │   ├─ HeroCP/        # Заголовок КП
 │   ├─ ValueCP/       # Что получит заказчик
 │   ├─ FlowCP/        # Логика работы сервиса
 │   ├─ StagesCP/      # Этапы реализации
 │   ├─ TechCP/        # Технологии и реализация
 │   ├─ ResultCP/      # Результат работы
 │   ├─ ContactsCP/    # Контакты для связи
 │   └─ RequisitesCP/  # Реквизиты исполнителя
 ├─ components/        # Переиспользуемые компоненты
 │   └─ SectionWrapper/
 ├─ styles/            # Глобальные стили
 ├─ App.tsx
 └─ main.tsx
```

