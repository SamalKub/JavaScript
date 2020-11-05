// task 1 --------------------
let a = 4;
function f1() {
    if (a == 4) {
        console.log(true);
    }
}
document.querySelector('.task-1').onclick = f1;
// task 2 --------------------
// api.openweathermap.org/data/2.5/weather?id=524894&appid={API key}
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