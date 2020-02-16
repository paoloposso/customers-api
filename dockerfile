FROM node:10.13.0-alpine

ENV MONGODB_URI='mongodb://dev:teste123@ds225205.mlab.com:25205/customers'
ENV NODE_VERBOSE='false'
ENV NODE_ENV='production'
ENV PORT='7001'

WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install

# Copy dist
ADD . /usr/src/app
RUN npm run build

# Start
CMD [ "npm", "start" ]
EXPOSE 7001
