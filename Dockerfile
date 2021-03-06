FROM node:10

RUN apt-get update \
    && apt-get install -y \
        curl \
        netcat \
        nginx-extras \
        python \
        python-setuptools \
        unzip \
    && python -m easy_install supervisor \
    && mkdir -p /code

WORKDIR /code

COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./
RUN rm /etc/nginx/nginx.conf \
    && ln -sf /code/nginx/* /etc/nginx/

RUN ./scripts/devenv.sh
EXPOSE 3000
ENTRYPOINT ["./scripts/entrypoint.sh"]
