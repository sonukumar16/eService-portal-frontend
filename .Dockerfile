FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn cache clean
COPY . .
RUN yarn run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html