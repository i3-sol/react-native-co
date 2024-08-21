FROM alpine:latest

# 必要パッケージの取得とタイムゾーンの変更処理（Asia/Tokyo）
RUN \
  apk add --no-cache tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  apk del tzdata

# dockerのバイナリを取得し、クライアントのみを/usr/local/binへコピー
RUN apk add --no-cache ssl_client && \
  mkdir -p /usr/local/bin && \
  wget https://get.docker.com/builds/Linux/x86_64/docker-latest.tgz -O - | tar -xzC /usr/local/bin --strip=1 docker/docker

ENV TZ=Asia/Tokyo
COPY cron.d /var/spool/cron/crontabs/root


CMD busybox crond -l 2 -L /dev/stderr -f
