// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
/* Express to run server and routes */
const express = require('express');
/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const openWeatherAPIKEY = 'c2da5b47cc5e697eff5e9c844de10474';

///from excercise
/* Empty JS object to act as endpoint for all routes */
projectData = {};




/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
};

// TODO-ROUTES!

//GET route;
app.get('/all', sendData);

function sendData(request, response) {
  response.send(data);
};

// POST route
app.post('/add', callBack);

function callBack(req, res) {
  res.send('POST received');
}

// POST an animal
const data = [];

app.post('/addWeatherData', addWeatherData);

function addWeatherData(req, res) {
  data.push(req.body);
  console.log(data);

};