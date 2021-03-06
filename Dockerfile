FROM node:14 as builder
WORKDIR '/app'
COPY package*.json ./
#RUN npm install -g -s --no-progress yarn && \
  #    yarn install && \
  #  yarn cache clean
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
