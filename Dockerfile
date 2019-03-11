FROM node:10.15.3-alpine as Builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=Builder /app/build /usr/share/nginx/html