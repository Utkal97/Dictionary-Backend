# Dictionary-Backend
A dictionary server built using Nodejs, Expressjs and MongoDB.
The server serves data of words when requested. The server is currently hosted on Heroku platform with [link](https://dictionarycli.herokuapp.com/).

## Installation :
1. Install Nodejs and npm and MongoDB.
2. Clone the repository to your device.
3. `npm install` to install the required dependencies.
4. Change the mongoose connection string (`DB_CONNECT`) to your own string that connects to your MongoDB cluster.
5. `npm start` to start the server.

## Usage
### API calls supported :
1. `GET '/word/<your_word>/definitions' :` <br />
  Returns definitions of the requested word. <br />
  Output format : List of Strings <br />
  
2. `GET '/word/<your_word>/antonyms' :` <br />
  Returns antonyms of the requested word. <br />
  Output format : List of Strings <br />

3. `GET '/word/<your_word>/synonyms' :` <br />
  Returns synonyms of the requested word. <br />
  Output format : List of Strings <br />
  
4. `GET '/word/<your_word>/examples' :` <br />
  Returns examples of the requested word. <br />
  Output format : List of Strings <br />
  
5. `GET '/word/<your_word>/allInfo' :` <br />
  Returns all the information of the requested word. <br />
  Output format : Object containing information <br />

6. `GET '/words' :` <br />
  Returns a random word with all its information. <br />
  Output format : Object containing information <br />

