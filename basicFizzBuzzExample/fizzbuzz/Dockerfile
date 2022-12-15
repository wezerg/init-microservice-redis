FROM node

WORKDIR /code

RUN npm install redis

COPY ./app.mjs .

CMD ["node", "app.mjs"]