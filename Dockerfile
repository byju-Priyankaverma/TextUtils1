FROM node:18-alpine as builder
WORKDIR /TextUtils
COPY package.json .
RUN npm install

COPY . .
Expose 4000
CMD ["npm","start"]