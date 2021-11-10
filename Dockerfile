FROM node:16

RUN mkdir -p /opt/enpa

WORKDIR /opt/enpa

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]