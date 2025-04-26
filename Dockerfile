FROM node:20-bookworm

WORKDIR /app
ADD . /app

RUN npx -y playwright@1.52.0 install --with-deps

COPY data/ /app/data
COPY model/ /app/model
COPY pages/ /app/pages
COPY tests/ /app/tests
COPY package.json /app/
COPY package-lock.json /app/
COPY playwright.config.ts /app/

RUN npx npm install

CMD ["npx", "playwright", "test"]