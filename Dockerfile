FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN if [ -f package-lock.json ]; then cp package-lock.json .; fi

RUN npm install || npm install --no-package-lock

RUN npm install

COPY . .

CMD ["npm", "test"]
