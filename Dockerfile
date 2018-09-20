FROM nginx
ENV API_HOST skyline_admin
ENV API_PORT 5000
WORKDIR /usr/share/nginx/html
COPY ./dist/admin-ui .

