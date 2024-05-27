FROM node:20

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 9000

CMD ["pnpm", "run", "start:dev"]
