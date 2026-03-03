FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Create `.dockerignore`:
```
node_modules
npm-debug.log
.git
.gitignore
