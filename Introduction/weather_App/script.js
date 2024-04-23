const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const humidity =document.getElementById('humidity');
const wind =document.getElementById('windSpeed');
const input = document.getElementById('location_input');
const search = document.getElementById('searchbtn');
search.addEventListener('click',()=>{
    const city =input.value;
    const api= `da8ec2ff36f440a049af390faceeabf1`;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        weatherInfo.style.display = 'block'
        cityName.textContent =data.name;
        temp.textContent = `Temperature: ${data.main.temp} C`;
        humidity.textContent = `Humidity: ${data.main.humidity} %`;
        wind.textContent = `Wind speed: ${data.wind.speed} Km/Hr`;
        console.log(data); })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        cityName.textContent= `404:City not Found`;
        temp.textContent = '';
        humidity.textContent ='';
        wind.textContent = ``;
    });
    }
)