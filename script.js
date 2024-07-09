const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0b5cb101a2msh4f819749598bdefp1ce794jsn12d1542afa53",
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityName.innerHTML = city;
      const res = response.current;
      temp.innerHTML = res.temp_c;
      temp2.innerHTML = res.temp_c;
      feels_like.innerHTML = res.feelslike_c;
      humidity.innerHTML = res.humidity;
      humidity2.innerHTML = res.humidity;
      pressure.innerHTML = res.pressure_mb;
      gust.innerHTML = res.gust_kph;
      wind_speed.innerHTML = res.wind_kph;
      wind_degrees.innerHTML = res.wind_degree;
      wind_degrees2.innerHTML = res.wind_degree;
      timeZone.innerHTML = response.location.tz_id;
      lastUpdate.innerHTML = res.last_updated;
      year.innerHTML = response.location.localtime.slice(0, 4);
    })
    .catch((err) => {
      console.error(err),
        head.innerHTML = "Please check the spelling of the location you entered.";
      cityName.innerHTML = "";
    });
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
