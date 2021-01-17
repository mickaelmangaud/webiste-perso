FROM node:latest
WORKDIR /src/usr/app
COPY package*.json ./
COPY . ./
RUN npm install
CMD ["npm", "run", "dev"]
