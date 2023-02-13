FROM alpine
WORKDIR /root/
COPY . .
RUN cd api
COPY api/server.js ./api/

EXPOSE 3000

CMD ["yarn", "start"]
