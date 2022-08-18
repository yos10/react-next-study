FROM node:16-bullseye-slim

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
