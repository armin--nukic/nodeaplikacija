# Koristimo zvanični Node.js Docker image kao baznu sliku
FROM node:14

# Kreiramo direktorijum za našu aplikaciju unutar Docker kontejnera
WORKDIR /usr/src/app

# Kopiramo package.json i package-lock.json u WORKDIR
COPY package*.json ./

# Instaliramo zavisnosti
RUN npm install

# Kopiramo ceo sadržaj aplikacije u WORKDIR
COPY . .

# Postavljamo ENV promenljivu za port na 3004
ENV PORT 3004

# Definišemo komandu za pokretanje aplikacije
CMD [ "npm", "start" ]
