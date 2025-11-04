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

# --- Runner ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Next.js server binds to this host/port in container
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
# Set a default, override in runtime (used by SEO)
ENV NEXT_PUBLIC_SITE_URL="https://example.com"

# Copy only what's needed to run
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Run as non-root
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]
