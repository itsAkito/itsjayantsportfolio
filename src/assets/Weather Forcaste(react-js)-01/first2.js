const apiKey = "9d5158fea3ce0a5f0424798acd6400bf";
const weatherInfo = document.querySelector(".weather-info");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  const city = input.value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Rain:${data.rain && data.rain["24h"]? data.rain["24h"] + "mm":"No rain"}</p>
        <p>Wind Speed: ${data.wind.speed} km/h</p>
      `;
    })
    .catch((error) => {
      weatherInfo.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});
