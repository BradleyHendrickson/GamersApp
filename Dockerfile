# syntax=docker/dockerfile:1

FROM node:16-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./ 
RUN npm ci

# Copy project files
FROM deps AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
# RUN npx prisma migrate deploy
RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nodejs --from=builder /app/next.config.js ./
COPY --chown=nextjs:nodejs --from=builder /app/public ./public
COPY --chown=nextjs:nodejs --from=builder /app/.next ./.next
COPY --chown=nextjs:nodejs --from=builder /app/prisma ./prisma
COPY --chown=nextjs:nodejs --from=builder /app/package-lock.json /app/package.json ./
COPY --chown=nextjs:nodejs --from=builder /app/node_modules ./node_modules

ENV DATABASE_URL="postgresql://postgres:test@localhost:5432/cliquesell_dev?schema=public"

ENV NEXTAUTH_URL=http://localhost:3000/

ENV NEXTAUTH_SECRET=STAGING

USER nextjs

EXPOSE 3000

ENV PORT 3000

# CMD [ "node", "server.js"]
CMD [ "npm", "run", "start"]
#CMD [ "bash" ]
