# BASE NODE
FROM node:12-alpine AS BASE

WORKDIR /base 

# INSTALL DEPENDENCIES
FROM BASE as DEPENDENCIES

COPY package.json tsconfig.json ./

RUN npm i

# CREATE BUILD
FROM  DEPENDENCIES as BUILD

COPY src ./src

RUN npm run build

# CREATE RELEASE
FROM node:12-alpine as RELEASE

WORKDIR /usr/base

COPY --from=BUILD /base/package.json ./

RUN npm i --only=production

COPY --from=BUILD /base/build ./build

EXPOSE 7000

CMD node build