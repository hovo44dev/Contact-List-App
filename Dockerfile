FROM node:lts-alpine

# Sample http-server for serving the content
RUN npm install -g http-server

# Making app folder as current workplace
WORKDIR /app

# Copy both 'package.json' and 'package-lock.json'
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files and folders to the current working directory
COPY . .

# Build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]