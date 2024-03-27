FROM node:18

WORKDIR /app/backend

COPY package* ./

RUN npm i

COPY . ./

EXPOSE 3001

ENTRYPOINT ["npm", "run"]
CMD ["start"]