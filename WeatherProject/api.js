// task 1 --------------------
let a = 4;
function f1() {
    if (a == 4) {
        console.log(true);
    }
}
document.querySelector('.task-1').onclick = f1;
// task 2 -------------------
let title = document.querySelector('.title p');
let notification = document.querySelector('.notification');
let icon = document.querySelector('.weather-icon');
let tempVal = document.querySelector('.temperature-value p');
let tempDesc = document.querySelector('.temperature-description p');

const KELVIN = 273;

let weather = {};

weather.temp = {
    unit: 'celsius'
}

let key = 'a1c32230c21f8049034fcf4e669fa3ba';

// Проверка на определение геолокации пользователя
if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    notification.style.display = 'block';
    notification.innerHTML = '<p>Геолокация не определена</p>';
}

function success(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    getWeather(lat, lon);
}

function error(err) {
    notification.style.display = 'block';
    notification.innerHTML = `<p>Sorry! ${err.message}</p>`
}

// Функция, которая будет выводить погоду пользователя используя API
function  getWeather(lat, lon) {
    // let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    console.log(api);
    fetch (api)
        .then(function(response) {
            let data = response.json();
            return data;
    })
        .then(function(data){
            console.log(data);
            title.textContent = data.name;
            tempVal.innerHTML = Math.round(data.main.temp) - KELVIN + '&deg<span>C</span>';
            tempDesc.textContent = data.weather[0].description;
            icon.innerHTML = `<img src="icons/${data.weather[0].icon}.png">`;
            weather.temp.val = Math.round(data.main.temp) - KELVIN;
        })
}

// Функция которая меняет температуру на Ф
function setFahrenheit(){
    temp = weather.temp.val;
    tempFahrenheit = (temp * 9/5 + 32) + '&deg<span>F</span>';
    if (weather.temp.unit == 'celsius'){
        document.querySelector('.temperature-value p').innerHTML = tempFahrenheit;
        weather.temp.unit = 'fahrenheit';
    }
    else {
        document.querySelector('.temperature-value p').innerHTML = temp + '&deg<span>C</span>';
        weather.temp.unit = 'celsius';
    }
}

document.querySelector('.temperature-value p').onclick = setFahrenheit;

// Пример из Вашего видео
fetch ('http://api.openweathermap.org/data/2.5/weather?id=1526384&appid=a1c32230c21f8049034fcf4e669fa3ba')
    .then (function (resp) {return resp.json() })
    .then (function (data) {
        console.log(data);
        document.querySelector('.name-1').textContent = data.name;
        document.querySelector('.temp-1').innerHTML = Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.weather').innerHTML = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/04n@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
