# BASE NODE
FROM node:12-alpine as BASE

WORKDIR /base

# INSTALL DEPENDENCIES
FROM BASE as DEPENDENCIES

COPY package.json tsconfig.json next-env.d.ts ./

RUN npm i 

# CREATE BUILD
FROM DEPENDENCIES as BUILD

COPY public/ ./public
COPY pages/ ./pages

RUN npm run build

# CREATE RELEASE
FROM node:12-alpine

WORKDIR /usr/app

COPY --from=BUILD /base/package.json .
COPY --from=BUILD /base/.next ./.next
COPY --from=BUILD /base/public ./public

RUN npm i --only=production

EXPOSE 3000

CMD npm run start