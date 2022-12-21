const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0b5cb101a2msh4f819749598bdefp1ce794jsn12d1542afa53",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_degrees2.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Patna");

document.querySelector("#Delhi").addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Delhi");
});

document.querySelector("#Patna").addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Patna");
});

document.querySelector("#Kolkata").addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Kolkata");
});
