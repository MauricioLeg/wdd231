const year = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `Last modification: ${document.lastModified}`;

const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const cards = document.querySelector(".cards");
const box = document.querySelector('.card-box');
async function createCards() {
    await fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const isHomePage = document.body.classList.contains('home-page');
        const companiesToShow = isHomePage
        ? data.filter(c => c.membershipLevel === 2 || c.membershipLevel === 3).slice(0, 5) : data;
        console.log(companiesToShow);
        const randomFiltered = companiesToShow.sort(() => Math.random() - 0.5).slice(0, 2 );
        const isDirectory = document.body.classList.contains('directory');
        if (!isHomePage || !isDirectory) return;
        const companiesDirectory = isDirectory 
        ? data : data;
        console.log(companiesDirectory);
        if (document.body.classList.contains('home-page')) {
            randomFiltered.forEach(company => {
                const card = document.createElement("aside");
                card.classList.add('card-box');
                let imgTag = `<img src="${company.logo}" width="150" height="auto" loading="lazy" alt="Site's logo">`;
                if (company.logo === "https://cdn.logo.com/hotlink-ok/logo-social.png") {
                    imgTag = `<img src="${company.logo}" width="190" height="100" style="aspect-ratio: 1.9; object-fit: contain;" loading="lazy" alt="Site's logo">`;
                }
                card.innerHTML = `${imgTag}
                <h3>${company.companyName}</h3>
                <h4>Membership Level: ${company.membershipLevel}</h4>
                <p>Address: ${company.address}</p>
                <p>Phone number: ${company.phone}</p>
                <p>Website: <a href="${company.website}" target="_blank">${company.companyName} Website</a></p>`;
                
                cards.appendChild(card);
            })
        }
        if (document.body.classList.contains('directory')) {
            companiesDirectory.forEach(company => {
                const card = document.createElement("section");
                card.classList.add('card-box');
                let imgTag = `<img src="${company.logo}" width="150" height="auto" loading="lazy" alt="Site's logo">`;
                if (company.logo === "https://cdn.logo.com/hotlink-ok/logo-social.png") {
                    imgTag = `<img src="${company.logo}" width="190" height="100" style="aspect-ratio: 1.9; object-fit: contain;" loading="lazy" alt="Site's logo">`;
                }
                card.innerHTML = `${imgTag}
                <h3>Company name: ${company.companyName}</h3>
                <p>Address: ${company.address}</p>
                <p>Phone number: ${company.phone}</p>
                <p>Website: ${company.website}</p>
                <p>Membership Level: ${company.membershipLevel}</p>`;
            
                cards.appendChild(card);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching members:', error)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createCards();
    const display1 = document.querySelector("#display-btn1");
    if (display1){

        display1.addEventListener('click', () => {
            cards.classList.add('grid');
            cards.classList.remove('list');
        });
    }

    const display2 = document.querySelector("#display-btn2");
    if (display2) {
        display2.addEventListener('click', () => {
            cards.classList.toggle('list');
            cards.classList.remove('grid');
        });
    }
});

// HOME PAGE FUNCTIONALITY
const currentWeather = document.querySelector('#current-weather');
const forecast = document.querySelector('#fore-weather');

const lat = -26.805264223692863;
const lon = -65.21837586127;
const apiKey = 'a03eb209e95979561eb6abdffa9c139e';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&&appid=${apiKey}`;
const foreUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function apiFetch() {
    if (!currentWeather) return;
    try {
        const response = await fetch(url);
        const response2 = await fetch(foreUrl);
        if (response.ok && response2.ok) {
            let data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
            let data2 = await response2.json();
            console.log(data2);
            displayForecast(data2);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayCurrentWeather(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    currentWeather.innerHTML = `<h2>Current Weather</h2>
                                <img 
                                src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
                                srcset="
                                https://openweathermap.org/img/wn/${data.weather[0].icon}.png 1x,
                                https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png 2x"
                                width="100"
                                height="100"
                                alt="${data.weather[0].description}">
                                <p>Temperature: ${data.main.temp}&deg;C</p>
                                <p>${data.weather[0].description}
                                <p>High: ${data.main.temp_max}</p>
                                <p>Low: ${data.main.temp_min}</p>
                                <p>Sunrise: ${data.sys.sunrise}</p>
                                <p>Sunset: ${data.sys.sunset}</p>`;
}
function displayForecast(data) {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const tomorrow = weekDays[(today.getDay() + 1) % 7];
    const afterTomorrow = weekDays[(today.getDay() + 2) % 7];
    forecast.innerHTML = `<h2>Weather Forecast</h2>
                            <p>Today: ${data.list[1].main.temp}&deg;C</p>
                            <p>${tomorrow}: ${data.list[10].main.temp}&deg;C</p>
                            <p>${afterTomorrow}: ${data.list[18].main.temp}&deg;C</p>`;
}

// JOIN PAGE FUNCTIONALITY
document.querySelector('#timestamp').value = Date.now();

const membership = document.querySelector('#memberships');
const dialog = document.querySelector('#levels')
const membershipLevel = [
    {
        "title": "Non-Profit membership",
        "price": "free",
        "benefits": [
            "Business listing in online directory", 
            "Non-profit badge on profile", 
            "Access to general networking events",
            "Invitations to community forums",
            "Limited event discounts (5-10%)",
            "Newsletter inclusion (text only)"
        ]
    },
    {
        "title": "Bronze membership",
        "price": "$20-$30/month\n$200-$300/year",
        "benefits": [
            "Enhanced directory listing (logo + description)",
            "Access to monthly networking events",
            "10–15% discount on paid events",
            "Access to basic training workshops",
            "Quarterly spotlight in newsletter",
            "Member-only resources (templates, guides)}"
        ]
    },
    {
        "title": "Silver membership",
        "price": "$50-$70/month\n$500-$700/year",
        "benefits": [
            "Everything in Bronze, plus",
            "Homepage spotlight rotation (monthly)",
            "Social media mentions (2-4 per year)",
            "Priority registration for events",
            "25% discount on events & training",
            "Free attendance to selected workshop",
            "Job postings on the website",
            "Access to exclusive roundtables",
            "Analytics on profile views",
        ]
    },
    {
        "title": "Gold membership",
        "price": "$100-$150/month\n$1000-1500/year",
        "benefits": [
            "Everything in Silver, plus",
            "Monthly spotlight article or interview",
            "Logo placement on event materials",
            "Speaking opportunities at events",
            "Host or co-host chamber events",
            "50-100% discount on events",
            "VIP-only networking events",
            "Dedicated account manager",
            "Early access to sponsorship opportunities",
        ]
    }
]
const myTitle = document.createElement('h3');
const mySubtitle = document.createElement('h3');
const closeBtn = document.createElement('button');
const price = document.createElement('p');
const info = document.createElement('p');
closeBtn.textContent = '✖';
closeBtn.addEventListener('click', () => dialog.close())
dialog.appendChild(myTitle);
dialog.appendChild(price);
dialog.appendChild(mySubtitle);
dialog.appendChild(info);
dialog.appendChild(closeBtn);

function DisplayMemberships(data) {
    data.forEach(level => {
        const section = document.createElement('section');
        const title = document.createElement('p');
        title.innerText = level.title + " level";
        const button = document.createElement('button');
        button.innerHTML = 'Learn more';
        button.classList.add('learn-btn');
        button.addEventListener('click', () => DisplayInfo(level));
        section.appendChild(title);
        section.appendChild(button);
        membership.appendChild(section);
        
    });
}
DisplayMemberships(membershipLevel)

function DisplayInfo(level) {
    if (!level || !level.benefits) {
        console.error("Invalid membership data:", level);
        return;
    }
    myTitle.textContent = level.title;
    price.textContent = `Price: ${level.price}`;
    mySubtitle.textContent = 'Benefits:';
    info.innerHTML = "";
    const ul = document.createElement('ul');

    level.benefits.forEach(benefit => {
        const list = document.createElement('li');
        list.textContent = benefit;
        ul.appendChild(list);
    })
    info.appendChild(ul)
    dialog.showModal();
}