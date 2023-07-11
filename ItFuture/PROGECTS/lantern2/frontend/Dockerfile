FROM node:18
WORKDIR /app
COPY package*.json ./
COPY node_modules/ ./node_modules
COPY . .
RUN npm run build
CMD ["npm", "start"]