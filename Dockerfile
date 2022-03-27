FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY client ./client

RUN cd ./client && npm install && npm run build

RUN rm -rf ./client

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]