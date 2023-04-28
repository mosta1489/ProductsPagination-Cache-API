FROM node:18.14.2-alpine

WORKDIR /products

COPY . .

RUN ["npm", "i"]

EXPOSE 3000

CMD [ "npm", "start"]