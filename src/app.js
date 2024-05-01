function updateCity(city) {
  let apiKey = `a20035dd93a6tbea3b9cff448a2b7eeo`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  updateCity(searchInput.value);
}

function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

updateCity("Antwerp");
