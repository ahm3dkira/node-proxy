FROM node:lts-alpine

WORKDIR /app/

COPY package*.json ./
RUN node --dns-result-order=ipv4first /usr/local/bin/npm install

COPY . .

EXPOSE 5000
CMD ["node", "index.js"]
