let base_url = "https://api.weatherapi.com/v1/current.json?key=e66729cdbe0845e28ac214952242501&q=";
let searchbox = document.querySelector(".Search input");
let searchbtn = document.querySelector(".Search button");
let weathericon = document.querySelector(".weather-icon");
let card = document.querySelector(".Card");

async function checkWeather(city) {
    let response = await fetch(`${base_url}${city}&aqi=no`);
    let data = await response.json();
    console.log(data.current.condition.text);
    console.log(data.current.temp_c);
    console.log(data.current.wind_kph);
    console.log(data.current.humidity);

    // Construct the city and country string
    let cityCountryString = `${data.location.name}, ${data.location.country}`;

    document.querySelector(".city").innerHTML = cityCountryString;
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/hr";

    if (data.current.condition.text === "Clouds" || data.current.condition.text === "Overcast") {
        weathericon.src = "./clouds.png";
    } else if (data.current.condition.text === "Clear") {
        weathericon.src = "./clear.png";
    } else if (data.current.condition.text === "Rain") {
        weathericon.src = "./rain.png";
    } else if (data.current.condition.text === "Drizzle") {
        weathericon.src = "./drizzle.png";
    } else if (data.current.condition.text === "Mist") {
        weathericon.src = "./mist.png";
    }

    if (data.current.condition.text === "Clouds" || data.current.condition.text === "Overcast" || data.current.condition.text === "Partly cloudy") {
        // Change the background of the Card to the specified gradient
        card.style.background = "#6238A7";
        card.style.background = "linear-gradient(135deg, #6238A7, #669A31)";
    }
    if (data.current.condition.text === "Clear") {
        // Change the background of the Card to the specified gradient
        card.style.background = "#51E88D";
        card.style.background = "linear-gradient(135deg, #51E88D, #E83CD7);";
    }

    if (data.current.condition.text === "Rain") {
        // Change the background of the Card to the specified gradient
        card.style.background = "#E03719";
        card.style.background = "linear-gradient(135deg, #E03719, #0325F4)";
    }

    if (data.current.condition.text === "Mist") {
        // Change the background of the Card to the specified gradient
        card.style.background = "#D3848D";
        card.style.background = "linear-gradient(135deg, #D3848D, #7C77CC)";
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
///ended