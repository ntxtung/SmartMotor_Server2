FROM node:12

WORKDIR /usr/xt/SmartMotor_server

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:prod"]