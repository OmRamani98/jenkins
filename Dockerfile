FROM node:SLIM

ENV  NODE_ENV development

WORKDIR /JENKINES

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]
