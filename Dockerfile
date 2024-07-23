FROM node:19.0.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 9000
CMD [ "npx", "quasar", "serve", "dist/spa", "--port", "3000" ]