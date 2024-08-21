FROM nginx:1.17.8
RUN apt-get update && apt-get install -y \
    vim \
    unzip \
    zip \
    git 
    
COPY web/default.conf.template /etc/nginx/conf.d/default.conf