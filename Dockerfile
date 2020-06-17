
# create image based from node version 12 base image
FROM node:12

# set working directory
WORKDIR /usr/src/app

# copy source files into working firectory
COPY . .

# install any dependencies from our package.json file
RUN yarn install

# expose port 3000 - from which we can acess our app in the browser
EXPOSE 3000

# exose port 9229 - the default inspect port we can use from debugging
EXPOSE 9229

# entry point command - check package.json under scripts
CMD [ "npm", "start" ]