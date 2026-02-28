## Архитектура проекта (FSD)

**Проект**: Platform Questions Frontend  
**Стек**:
- **Next.js 16** (App Router, `app` директория)
- **React 19**, **TypeScript**
- **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/postcss`)
- **@tanstack/react-query** — загрузка и кеширование данных
- **axios** — HTTP-клиент
- **zustand** — состояние клиента
- **react-hook-form** + **@hookform/resolvers** + **zod** — формы и валидация
- **Radix UI** (`@radix-ui/react-*`, `radix-ui`), **lucide-react**, **sonner**, `motion`
- Темизация: **next-themes**, собственные провайдеры
- Качество кода: **@biomejs/biome**, **knip**

TypeScript-конфигурация (`tsconfig.json`) настраивает алиасы под FSD:
- `@app/*` → `app/*`
- `@widgets/*` → `widgets/*`
- `@features/*` → `features/*`
- `@entities/*` → `entities/*`
- `@shared/*` → `shared/*`
- `@ui-kit/*` → `shared/ui-kit/*`

---

## FSD-слои и директории

Проект реализует **Feature-Sliced Design** с основными слоями:

- **app** — маршруты и сборка страниц из виджетов/фич
- **widgets** — композиция фич и сущностей в крупные блоки интерфейса
- **features** — законченное бизнес‑поведение (юнит функциональности)
- **entities** — бизнес‑сущности и их модели
- **shared** — переиспользуемая инфраструктура и UI без знания домена

### Слой `app`

Директория: `app/*`

- Отвечает за **маршрутизацию** и **композицию** слоёв:
  - `app/layout.tsx` — корневой макет:
    - Подключает глобальные стили (`globals.css`)
    - Оборачивает приложение в `AppProviders` из `@shared/providers`
    - Рендерит общий `Footer` (`@widgets/footer`) и глобальный `Toaster` (`@ui-kit/ui/sonner`)
  - `app/page.tsx` — главная страница:
    - Комбинирует виджеты: `Navigation`, `HomeHere`, `AboutHere` из `@widgets/*`
  - `app/questions/*` — страницы работы с вопросами:
    - `layout.tsx`, `page.tsx` собирают виджеты/фичи отображения вопросов
  - `app/auth/*` — auth-маршруты:
    - `auth/layout.tsx`, `auth/login/page.tsx`, `auth/register/page.tsx`
  - `app/help/page.tsx`, `app/email-confirm/page.tsx` и др. — дополнительные маршруты

В слое `app` нет бизнес-логики — только **сборка** готовых компонентов из нижележащих слоёв.

### Слой `widgets`

Директория: `widgets/*`

**Назначение**: крупные, осмысленные части UI, собирающие **features** и **entities**.

Примеры:
- `widgets/navigation`:
  - `Navigation.tsx`, `DesktopNav.tsx`, `MobileMenu.tsx`, `MobileMenuTrigger.tsx`, `Logo.tsx`, `ListItem.tsx`
  - Использует роутинг и данные пользователя (через фичи авторизации)
- `widgets/footer`:
  - `Footer.tsx` — глобальный подвал, используемый в `app/layout.tsx`
- `widgets/side-bar`:
  - `app-side-bar.widget.tsx`, `app-header-side-bar.tsx`, `app-footer-side-bar.tsx`, `app-content-side-bar.tsx`
  - Составной сайдбар, использующий навигацию и настройки
- `widgets/setting`:
  - `setting-modal.tsx` — модальное окно настроек, использующее фичи смены темы/языка/акцента
- `widgets/home-here`, `widgets/about-here`, `widgets/loading-screen`, `widgets/container` и др.

Виджеты **не содержат** собственной доменной логики — они собирают **features** и **entities** в законченные части интерфейса.

### Слой `features`

Директория: `features/*`

**Назначение**: самостоятельные юниты функциональности, решающие конкретную задачу (логин, регистрация, отображение списка, переключение темы и т.п.).

Основные фичи:

- `features/auth` — аутентификация:
  - `auth.provider.tsx` — `AuthProvider`, подключаемый в `AppProviders`
  - `auth.store.ts` — zustand‑хранилище для auth‑состояния
  - `auth.service.ts`, `auth.adapter.ts`, `auth.util.ts` — работа с API и утилиты
  - `actions/*` — действия пользователя:
    - `ui/AuthActions.tsx`, `ui/HeaderAuth.tsx`, `ui/UserMenuDropdown.tsx`
    - `hooks/useUserMenu.ts`, `api/use-logout.adapter.ts`
  - `login/*` — сценарии логина:
    - `login/ui/LoginForm.tsx`, `LoginHeaderCard.tsx`
    - `login/email/*` — логин по email (формы, схемы zod, адаптеры к API)
    - `login/phone/*` — логин по телефону
  - `register/*` — регистрация:
    - `ui/RegisterForm.tsx`, `config.ts`, `model/*`

- `features/setting` — пользовательские настройки:
  - `providers/theme.provider.tsx`, `providers/accent.provider.tsx`
  - `settings.config.ts`, `SwitchTheme.feature.tsx`, `SwitchAccentColor.feature.tsx`, `SwitchLanguage.feature.tsx`
  - Используются в `AppProviders` и в `widgets/setting`

- `features/question-display` — отображение вопросов:
  - `view/*` — общие представления (например, `QuestionsView.tsx`)
  - `list/*` (`QuestionsList.tsx`), `table/*` (`QuestionsTable.tsx`), `detail/*` (`QuestionDetailModal.tsx`)
  - Инкапсулирует логику получения и отображения списка/деталей вопросов

Характерные особенности:
- Фичи завязаны на **одну задачу/кейс** и могут переиспользоваться в разных страницах.
- Могут использовать `entities`, `shared` и `shared/ui-kit`, но не наоборот.

### Слой `entities`

Директория: `entities/*`

**Назначение**: описание доменных сущностей, их типов и базовых операций.

В проекте:
- `entities/question`:
  - `model/types.ts` — типы вопроса
  - `index.ts` — публичный API сущности
- `entities/user`:
  - `model/types.ts` — типы пользователя
  - `index.ts`

Сущности используются в `features` и `widgets`, но сами не знают о сценариях использования.

### Слой `shared`

Директория: `shared/*`

**Назначение**: общие, переиспользуемые модули без привязки к конкретному домену.

Основные подмодули:

- `shared/ui-kit` — дизайн‑система и UI‑компоненты:
  - `ui/*` — базовые компоненты (button, input, select, dialog, tooltip, pagination, skeleton, spinner, sidebar и т.д.)
  - `effects/*` — декоративные визуальные эффекты (background-lines, background-beams, spotlight, text-generate-effect и др.)
  - `index.ts` — точка входа в UI‑кит

- `shared/api`:
  - `axios.ts` — настроенный инстанс axios (базовый URL, интерсепторы и т.п.)

- `shared/config`:
  - `routing.config.ts` — конфигурация ссылок/меню (`SideBarLinks`, `NewFeaturesLinks`)

- `shared/providers`:
  - `index.tsx` — `AppProviders`, объединяющий:
    - `ThemeProvider` и `AccentProvider` из `features/setting`
    - `QueryClientProvider` (`@tanstack/react-query`)
    - `AuthProvider` (`features/auth`)

- Прочее:
  - `shared/lib/*` — общие утилиты (например, `generate-uniq-id.lib.ts`, `utils.ts`)
  - `shared/hooks/*` — общие хуки (`use-media-query.hook.ts`)
  - `shared/services/*` — инфраструктурные сервисы (например, `local-storage.service.ts`)
  - `shared/container/*` — вспомогательные контейнеры/обёртки (`container.client.ts`, `index.ts`)
  - `shared/types/*` — общие типы (`cookie-store.d.ts`)

---

## Потоки данных и состояние

- **HTTP и асинхронщина**:
  - Взаимодействие с бэкендом — через `shared/api/axios.ts` и адаптеры в фичах (`features/*/api/*`)
  - Для загрузки/кеширования данных используется `@tanstack/react-query` (провайдер в `AppProviders`)

- **Состояние клиента**:
  - Глобальное auth‑состояние — через `zustand` (`features/auth/auth.store.ts`) + контекст `AuthProvider`
  - Настройки темы/акцентного цвета/языка — через провайдеры в `features/setting` (частично поверх `next-themes`)

- **Формы и валидация**:
  - Формы (`LoginForm`, `RegisterForm`, формы логина по email/телефону) построены на `react-hook-form`
  - Валидационные схемы — в `model/schema.ts` и `model/types.ts` с использованием `zod`
  - Интеграция через `@hookform/resolvers`

---

## UI и темизация

- Базовые контролы и сложные UI‑паттерны реализованы в `shared/ui-kit/ui/*`:
  - На основе Radix UI (`dialog`, `alert-dialog`, `navigation-menu`, `dropdown-menu`, `tabs`, `tooltip`, `select` и т.п.)
  - Переиспользуемые компоненты (button, input, textarea, pagination, table, skeleton, spinner, card, badge и др.)
- Визуальные эффекты и анимации — в `shared/ui-kit/effects/*` и через `motion`.
- Темизация:
  - `ThemeProvider` и `AccentProvider` в `features/setting/providers/*`
  - Список доступных акцентных цветов — `features/setting/settings.config.ts`
  - Переключатели темы/акцента/языка реализованы как отдельные фичи (`SwitchTheme.feature.tsx`, `SwitchAccentColor.feature.tsx`, `SwitchLanguage.feature.tsx`)

---

## Конвенции и зависимости между слоями

**Направление зависимостей** соответствует FSD:
- `shared` → не зависит от домена, может использоваться везде
- `entities` → может использовать `shared`, но не знает о `features`/`widgets`/`app`
- `features` → могут использовать `entities` и `shared`, но не `app`
- `widgets` → собирают `features`, `entities`, `shared`
- `app` → верхний слой, знает про все остальные, но не содержит доменной логики

**Импорт** осуществляется только через алиасы из `tsconfig.json` (`@features/*`, `@entities/*`, `@widgets/*`, `@shared/*`, `@ui-kit/*`, `@app/*`), что явно фиксирует слой и облегчает навигацию.

---

## Как развивать архитектуру дальше

- **Новые сценарии** добавлять как новые фичи в `features/*`, с выносом общих типов в `entities/*`.
- **Новые крупные блоки интерфейса** выносить в `widgets/*`, собирая в них существующие фичи и сущности.
- **Переиспользуемые компоненты/утилиты** добавлять в `shared/*` (UI — в `shared/ui-kit`, утилиты — в `shared/lib`, сервисы — в `shared/services`).
- **Страницы** и маршруты создавать только в `app/*`, минимизируя логику в роут‑компонентах и перекладывая её в `features`/`widgets`.

