FROM caddy:latest

COPY ./Caddyfile /etc/caddy/Caddyfile
COPY ./css /srv/css
COPY ./index.html /srv/index.html
EXPOSE 3002