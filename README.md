# Dzen VPN Landing

## Стек: <a href="https://ui.shadcn.com/" target="_blank">shadcn/ui</a> + <a href="https://nextjs.org/" target="_blank">Next.js</a> + <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>

## Разделы

- [x] Navbar
- [x] Сайдбар (мобильный)
- [x] Hero
- [x] Спонсоры
- [x] Преимущества
- [x] Возможности
- [x] Отзывы
- [x] Команда
- [x] Комьюнити
- [x] Контакты
- [x] Цены
- [x] FAQ
- [x] Услуги
- [x] Подвал (Footer)

## Возможности

- [x] Адаптивная вёрстка
- [x] Удобная навигация
- [x] Поддержка тёмной темы

## Стек

- **Next.js 15**, **React 19**, **TypeScript**
- **Tailwind CSS**, **shadcn/ui** (Radix UI)
- Docker (Node 20 Alpine)

## Структура проекта

- `app/` — маршруты и страницы Next.js (App Router)
- `components/` — UI-компоненты (`ui/`, `layout/`, `icons/`)
- `public/` — статические ресурсы
- `lib/` — утилиты
- `styles` — Tailwind в `app/globals.css`
- Конфиги: `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <your-repo-url> landing
   cd landing
   ```
2. Установите зависимости (Node 20 LTS рекомендуется):
   ```bash
   npm install
   ```
3. Скопируйте переменные окружения при необходимости:
   ```bash
   cp .env.example .env
   # Обновите значения в .env
   ```

## Локальная разработка

```bash
npm run dev
```
Откройте http://localhost:3000

## Сборка production

```bash
npm run build
npm start
```

## Docker (локально)

Собрать и запустить без reverse-proxy:
```bash
docker build -t landing:local .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 landing:local
```

Или через `docker-compose.yml` (добавьте `ports: ["3000:3000"]` локально):
```bash
docker compose up -d
```

## Переменные окружения

- `NEXT_PUBLIC_SITE_URL` — публичный URL сайта (используется для SEO/каноникал/JSON-LD). См. `.env.example`.

## Скрипты npm

- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка прод-версии
- `npm start` — запуск собранного приложения
- `npm run lint` — линтинг
## Деплой (Docker + Caddy + GitHub Actions)

Ниже актуальная схема доставки на VPS, соответствующая файлам `Dockerfile`, `docker-compose.yml`, `Caddyfile` и workflow `.github/workflows/deploy.yml`.

### Требования на VPS

- **Docker** и **Docker Compose plugin** (docker compose v2).
- Внешняя сеть Docker `caddy` (используется `docker-compose.yml`). Создать один раз:
  ```bash
  docker network create caddy
  ```
- Запущенный **Caddy** как reverse-proxy, подключенный к сети `caddy` и с доменом в `Caddyfile`.

### Caddy

Файл `Caddyfile` в репозитории содержит пример:

```
dzen-vpn.com {
  encode gzip zstd
  reverse_proxy landing:3000 {
    header_up Host {host}
    header_up X-Forwarded-For {remote}
    header_up X-Forwarded-Proto {scheme}
    header_up X-Forwarded-Host {host}
  }
}
```
- Замените `dzen-vpn.com` на ваш домен.
- Убедитесь, что контейнер Caddy находится в сети `caddy` и читает корректный `Caddyfile`.
  Пример запуска (один из вариантов):
  ```bash
  mkdir -p /opt/caddy
  # Скопируйте/разместите Caddyfile в /opt/caddy/Caddyfile
  docker run -d --name caddy --restart unless-stopped \
    -p 80:80 -p 443:443 \
    -v /opt/caddy/Caddyfile:/etc/caddy/Caddyfile \
    -v caddy_data:/data -v caddy_config:/config \
    --network caddy caddy:2
  ```

### Контейнер приложения

- Билдится как Next.js production и запускается `npm start` на `PORT=3000` (`HOSTNAME=0.0.0.0`).
- Публичный URL для SEO/каноникалов: переменная `NEXT_PUBLIC_SITE_URL` (см. `.env.example`).

Фрагмент `docker-compose.yml` (уже в репо):

```yaml
services:
  landing:
    image: ${IMAGE}
    container_name: landing
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
      - PORT=3000
      - HOSTNAME=0.0.0.0
    expose:
      - "3000"
    networks:
      - caddy

networks:
  caddy:
    external: true
```
> Примечание: локально без прокси можно временно добавить `ports: ["3000:3000"]` к сервису `landing`.

### CI/CD через GitHub Actions

Workflow `.github/workflows/deploy.yml` делает следующее:

- Сборка Docker-образа и пуш в GHCR: `ghcr.io/<owner>/landing:<tag>`.
- Копирование `docker-compose.yml` на VPS в `/opt/landing`.
- На VPS формирует `.env` с `IMAGE` и `NEXT_PUBLIC_SITE_URL`, затем `docker compose pull && docker compose up -d`.

Необходимые GitHub Secrets:

- **VPS_HOST** — адрес сервера.
- **VPS_USER** — пользователь SSH.
- **VPS_SSH_KEY** — приватный ключ SSH (PEM/OPENSSH).
- **VPS_PORT** — порт SSH (опционально, по умолчанию 22).
- **NEXT_PUBLIC_SITE_URL** — публичный URL сайта, например `https://dzen-vpn.com`.

## Лицензия

Проект распространяется по лицензии MIT. См. файл [`LICENSE`](./LICENSE).
