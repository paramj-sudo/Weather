const apiKey= "63a0c0127acfa323573e024a34154fb5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response =await fetch(apiUrl +city + `&appid=${apiKey}`);

    if(response.status==404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wwather").style.display = "none";
    } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".Temp").innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ "kmph";

    if (data.weather[0].main != null) {

        weatherIcon.src= "images/" + data.weather[0].main + ".png";
    
      }

      document.querySelector(".weather").style.display = "block";
}
}

searchbtn.addEventListener("click", ()=> {
    checkWeather(searchbox.value);
});