FROM node:16

WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run protoc-gen
# RUN npm run protoc-reflection # 若要公開 reflection service，請取消註解
RUN npm run build
EXPOSE 8080
CMD [ "npm", "start" ]

