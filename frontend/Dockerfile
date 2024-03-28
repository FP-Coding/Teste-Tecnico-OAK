FROM node:18

WORKDIR /app/frontend

COPY package* ./

RUN npm i

COPY . ./

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["build"]