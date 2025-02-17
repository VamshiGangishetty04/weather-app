const apiKey = "bd5e378503939ddaee76f12ad7a97608"; 

function getWeather() {
    const city = document.getElementById("cityInput").value;
    
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found.");
                return;
            }

            document.getElementById("city").innerText = data.name;
            document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("description").innerText = data.weather[0].description;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error("Error fetching data:", error));
}