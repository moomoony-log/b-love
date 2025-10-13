#DockerFile for B-Love-Web-Client
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9090

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "9090"]

