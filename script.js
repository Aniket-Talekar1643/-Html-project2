const inputbox = document.querySelector('.inputbox');
const searchbox = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weatherbody');

async function checkweather(city) {
    const api = "0c503c074b8c202639b9b8ce206114e3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

   console.log(weather_data);
    if (weather_data.cod === `400`) {
        // weather_img.src="404.png";
        // console.log("error");
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>&#x2022;C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
    }
    // console.log(weather_data);
}



searchbtn.addEventListener('click', () => {
    checkweather(inputbox.value);
});
