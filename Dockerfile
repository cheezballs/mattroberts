FROM node:12.19.0-alpine3.12 AS compile-image

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN npm install
RUN ng build --prod

FROM nginx
#COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/app-name /usr/share/nginx/html