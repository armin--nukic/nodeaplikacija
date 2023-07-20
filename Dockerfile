# Koristimo zvanični Node.js Docker image kao osnovu
FROM node:14

# Postavljamo radni direktorijum unutar kontejnera
WORKDIR /usr/src/app

# Kopiramo package.json i package-lock.json u radni direktorijum
COPY package*.json ./

# Instaliramo zavisnosti
RUN npm install

# Kopiramo ostatak aplikacije u radni direktorijum kontejnera
COPY . .

# Pokrećemo aplikaciju kada se kontejner pokrene
CMD ["node", "app.js"]
