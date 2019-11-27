/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = ',us&appid=c2da5b47cc5e697eff5e9c844de10474'
///api.openweathermap.org/data/2.5/weather?zip={zip code},{country code} &appid=b6907d289e10d714a6e88b30761fae22
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
//local node url for adding projectData
const addDataURL = '/addWeatherData'
const projDataURL = '/all'

let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
//temp values for latest reading
let weatherData = {};
let mostRecentRecord = [];

/* Function called by event listener */

document.getElementById('generate').addEventListener('click', callOpenWeather);



function postGet(APItemp) {
    ;
    content = document.getElementById('feelings').value;
    postData(addDataURL, { temperature: APItemp, date: newDate, userResponse: content });


    getProjData('/all')
        .then(function (data) {

            let recID = (data.length - 1);
            mostRecentRecord = data[recID];

            document.getElementById('date').innerHTML = 'Date: ' + mostRecentRecord.date;
            document.getElementById('temp').innerHTML = 'Temperature: ' + mostRecentRecord.temperature;
            document.getElementById('content').innerHTML = 'Feelings: ' + mostRecentRecord.userResponse;

        })

}

//function to make API call for openWeather data
function callOpenWeather(e) {

    getWeatherData(baseURL, document.getElementById('zip').value, apiKey)
        .then(function (openWeatherData) {
            postGet(openWeatherData.main.temp);
        })
}

/* Function to GET OpenWeather Data*/
const getWeatherData = async (baseURL, zip, key) => {
    const response = await fetch(baseURL + zip + key);

    try {
        const openWeatherData = await response.json();
        weatherData = openWeatherData;
        return openWeatherData
    } catch (error) {

        console.log("error", error);
    }
}



/* Function to GET Project Data */
const getProjData = async (url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON

        const allData = await request.json()
        return allData;
        console.log(allData);
    }
    catch (error) {
        console.log("error", error);
        //  handle the error
    }
};


/* Function to POST data */

const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin', // include, *same-origin
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
        //  handle the error
    }
};


