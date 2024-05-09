### STAGE 1: Build ###
FROM node:16 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build:prod

### STAGE 2: Run ###
FROM nginx:1.21-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/barinb /usr/share/nginx/html
