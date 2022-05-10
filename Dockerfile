FROM node:latest 
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY ./.angular ./.angular
EXPOSE 8080
CMD npm start