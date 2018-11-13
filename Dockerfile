FROM fengzhanyuan/nginx
ENV API_HOST skyline-admin
ENV API_PORT 5000
WORKDIR /usr/share/nginx/html
EXPOSE 80
COPY ./dist/admin-ui .

