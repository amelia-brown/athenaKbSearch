FROM node:argon
RUN mkdir -p /usr/src/athenaKbSearch
WORKDIR /usr/src/athenaKbSearch
COPY package.json /usr/src/athenaKbSearch/
RUN npm install
COPY . /urs/src/athenaKbSearch
EXPOSE 3004
RUN npm start
