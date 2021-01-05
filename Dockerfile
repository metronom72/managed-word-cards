FROM node:10-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install && rm -rf node_module
COPY --chown=node:node . .
EXPOSE 4200
ENTRYPOINT npm run lint && npm run test && npm run build
