FROM node AS base

FROM base AS builder

WORKDIR /app
COPY package.json ./
RUN ["npm", "install"]
COPY . .
RUN ["npm", "run", "build"]

FROM base

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3001
CMD ["node", "dist/index.js"]
