# CaffeineOverflow -group project
Christina Nakou

Anastasia Mela 

Giannis Grigorakos 

Panagiotis Vekios 

Theodoros Davarakis

### To test and run the project

For the backend:

The main code is in the scr path.

Clone the repo and do the following: 

- install Node.js

- install MongoDB

- and run: 

`npm install set caffeine_overflow_jwtPrivateKey=caffeine/ export caffeine_overflow_jwtPrivateKey=caffeine`

`sudo mongod node index.js` 
Then backend is running and listening to port 8765.

For the frondend :

the code is in path frontent.zip 
Clone the repo and run the following: 

`npm install npm install -g @angular/cli`

`ng serve --ssl true --ssl-key "<..path_of_backend/backend/server.key>" --ssl-cert "<..path_of_backend/backend/server.cert>"`

Last step: 
- Navigate on browser the page: https://localhost:4200/
