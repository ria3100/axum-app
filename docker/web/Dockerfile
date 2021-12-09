FROM node:16.13.0-alpine

ARG BUILD_ID
ENV BUILD_ID $BUILD_ID

WORKDIR /web

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./.yarnrc ./

RUN yarn --frozen-lockfile --production

COPY . .

RUN yarn cache clean

ENTRYPOINT ["yarn"]
CMD ["start"]
