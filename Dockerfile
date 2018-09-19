FROM nginx
WORKDIR /usr/share/nginx/html
COPY ./dist/admin-ui .
EXPOSE 80

