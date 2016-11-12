FROM node:argon
RUN mkdir -p /usr/src/athenaKbSearch
WORKDIR /usr/src/athenaKbSearch
COPY package.json /usr/src/athenaKbSearch/
RUN npm install
COPY . /usr/src/athenaKbSearch
EXPOSE 3004
CMD npm start
