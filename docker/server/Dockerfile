FROM node:18-alpine AS base
EXPOSE 3001
WORKDIR /app 

FROM base AS builder
COPY package.json package-lock.json ./ 
COPY apps/server/package.json ./apps/server/package.json
COPY packages/shared/package.json ./packages/shared/package.json
RUN ["npm", "install"]
COPY . . 
RUN ["npm", "run", "build", "-w", "@music-platform/server"]

FROM base AS production 
ENV NODE_ENV=production
COPY package.json package-lock.json ./ 
COPY apps/server/package.json ./apps/server/package.json
RUN ["npm", "install"]
COPY --from=builder /app/apps/server/dist ./apps/server/dist
CMD ["node", "apps/server/dist/index.js"]
