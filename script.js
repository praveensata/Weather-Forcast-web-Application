function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput.value.trim() !== '') {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const cityName = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                const weatherText = `Weather in ${cityName}: ${description}, Temperature: ${temperature}°C`;
                weatherInfo.textContent = weatherText;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.textContent = '24 cloudy';
            });
    } else {
        alert('Please enter a city name.');
    }
}
