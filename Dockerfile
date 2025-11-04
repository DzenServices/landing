# --- Dependencies ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# --- Build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure production build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- Runner (standalone) ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Next.js server binds to this host/port in container
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
# Set a default, override in runtime (used by SEO)
ENV NEXT_PUBLIC_SITE_URL="https://example.com"

# Copy standalone output only
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Run as non-root
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]
