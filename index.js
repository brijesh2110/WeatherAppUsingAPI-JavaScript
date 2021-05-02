console.log("Inside javascript")

const api = {
    key: "enter your api-key"
    base : "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.city-search')
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt)
{
    if(evt.keyCode==13)
    {
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
}

function getResults(query)
{
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}


function displayResults(weather){
    
    console.log(weather);
    let location = document.querySelector('.status');
    let desp = document.querySelector('.location');
    let speed = document.querySelector('.wind-value');
    let temp = document.querySelector('.temp-value');
    let details = document.querySelector('.cord-value');
   


    location.innerText=`${weather.name}, ${weather.sys.country}`;
    desp.innerText = `${weather.weather[0].main}`
    speed.innerText = `Speed: ${weather.wind.speed}`
    temp.innerText = `Min: ${weather.main.temp_min}/ Max: ${weather.main.temp_max}`
    details.innerText = `Latitude: ${weather.coord.lat}/ Longitude: ${weather.coord.lon}`
   
    
    
}

