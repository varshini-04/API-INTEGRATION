async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'cd0b6dd7c893e157dd45cdc1e8131be5'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        document.getElementById("weatherDisplay").innerText = "City not found.";
        return;
      }
  
      const output = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherDisplay").innerHTML = output;
    } catch (error) {
      console.error("Error fetching weather:", error);
      document.getElementById("weatherDisplay").innerText = "Error fetching data.";
  }
}
