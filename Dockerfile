FROM node:12-alpine AS builder

COPY . ./mattroberts
WORKDIR /mattroberts
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /mattroberts/dist/mattroberts /usr/share/nginx/html