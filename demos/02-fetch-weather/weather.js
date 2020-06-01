const log = (...args) => {
    console.log("Weather extension >", ...args);
}

const weatherUrl = "https://openweathermap.org/data/2.5/forecast?id=2990969&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02";

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
        const { city } = data;
        const { main, weather } = data.list[0];
        document.getElementById('weather').innerHTML =
            `City : ${city.name}<br/>
            Temperature : ${main.temp}°C (feels like ${main.feels_like}°C)<br/>
            Humidity : ${main.humidity}%<br/>
            ${!!weather ? "Other infos : " + weather[0].description : ""}
            `;
    });
});

log("end");