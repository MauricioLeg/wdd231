const temperature = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector('figcaption');


const lat = 49.75070880849803;
const long = 6.636398341984195;
const apiKey = 'a03eb209e95979561eb6abdffa9c139e';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&dt=1643803200&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    caption.innerHTML = data.weather[0].description;
    temperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].description);
}