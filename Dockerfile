FROM node:12

WORKDIR /usr/xt/SmartMotor_server

COPY . .

RUN npm install -g yarn
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:prod"]