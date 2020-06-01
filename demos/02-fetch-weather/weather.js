const log = (...args) => {
    console.log("Weather extension >", ...args);
}

const weatherUrl = "https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=2990969";

log("start");

const weatherBlock = document.createElement('div');
weatherBlock.innerHTML =
    `<div id="weather" style="top:1px;left:1px;position:absolute;padding:2px;width:auto;height:auto;background:white;border:1px solid black;">
        Weather is loading...
    </div>`;
document.body.append(weatherBlock);

fetch(weatherUrl).then(response => {
    response.json().then((data) => {
        log(data);
        document.getElementById('weather').innerHTML =
            `City : ${data.name}<br/>
            Temperature : ${data.main.temp}°C (feels like ${data.main.feels_like}°C)<br/>
            Humidity : ${data.main.humidity}%<br/>
            ${!!data.weather ? "Other infos : " + data.weather[0].description : ""}
            `;
    });
});

log("end");