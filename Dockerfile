FROM node
LABEL name="blog-api"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm start
