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

// HOME PAGE FUNCTIONALITY
const cardContainer = document.querySelector('#place');
const apiKey = 'a03eb209e95979561eb6abdffa9c139e';

import {places} from '../data/places.mjs';

let frame;
function createCards() {
    if (cardContainer) {
        places.forEach(place => {
            const section = document.createElement('section');
            section.classList.add('card-box')
            const lat = place.lat;
            const long = place.long;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&&appid=${apiKey}`;
            let weather = document.createElement('div');
            async function apiFetch() {
                if (!cardContainer) return;
                    try {
                        const response = await fetch(url);
                        if (response) {
                            let data = await response.json();
                            console.log(data);
                            weather.innerHTML = `<h2>Current Weather</h2>
                            <img 
                            src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
                            srcset="
                            https://openweathermap.org/img/wn/${data.weather[0].icon}.png 1x,
                            https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png 2x"
                            width="100"
                            height="100"
                            alt="${data.weather[0].description}" loading="lazy">
                            <p>Temperature: ${data.main.temp}&deg;C</p>
                            <p>${data.weather[0].description}</p>`;
                        } else {
                            throw Error (await response.text());
                        }
                    } catch (error) {
                        console.log(error);
                    }
            }
            apiFetch()
            frame = place.location;
            const images = place.images[0];
            section.innerHTML = `
            <img src="images/${images.img}" alt="${images.imgDesc}" loading="lazy">
            <h2>${place.name}</h2>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button class=open-dialog>See location and weather</button>
            <dialog class="dialog"></dialog>
            `;
            
            const openBtn = section.querySelector('.open-dialog');
            const dialog = section.querySelector('.dialog');
            if (dialog) {
                dialog.innerHTML = `
                <button class=closeBtn>✖</button>
                <iframe ${frame} title="map location"></iframe>
                `;
                dialog.appendChild(weather);
                
                openBtn.addEventListener('click', () => {
                        dialog.showModal();
                });
                const closeBtn = dialog.querySelector('.closeBtn');
                closeBtn.addEventListener('click', () => {
                    dialog.close();
                });
                
            }
            cardContainer.appendChild(section);
        });
    }
}

createCards();


// PLACES PAGE FUNCTIONALITY
const carousel = document.querySelector('.card-carousel');
let currentCardIndex = 0;

function createCarousel() {
    if (carousel) {
        places.forEach(x => {
            const cards = document.createElement('section')
            cards.classList.add('place-card');
            cards.innerHTML = `
            <h2>${x.name}</h2>
            <p>Discover activities in ${x.name}</p>`;
            
            if (Array.isArray(x.activities)) {
                x.activities.forEach(activity => {
                    const activDiv = document.createElement('div');
                    activDiv.classList.add('activities');
                    activDiv.innerHTML = `
                    <h3>${activity.name}</h3>
                    <p>Category: ${activity.category}</p>
                    <p>Description: ${activity.description}</p>
                    <address>Address: ${activity.address}</address>
                    `;
                    cards.appendChild(activDiv);
                })
            }
            const imageBox = document.createElement('img');
            imageBox.loading = "lazy";
            let currentIndex = 0;
            imageBox.src = `images/${x.images[currentIndex].img}`;
            imageBox.alt = x.images[currentIndex].imgDesc;
            cards.appendChild(imageBox);

            const btnPrev = document.createElement('button');
            const btnNext = document.createElement('button');
            
            btnPrev.textContent = "⟨";
            btnPrev.id = "btnPrev";
            btnNext.textContent = "⟩";
            btnNext.id = "btnNext";
            cards.appendChild(btnPrev);
            cards.appendChild(btnNext);

            btnNext.addEventListener('click', () => {
                currentIndex++;
                if (currentIndex >= x.images.length) {
                    currentIndex = 0;
                }
                imageBox.src = `images/${x.images[currentIndex].img}`;
                imageBox.alt = x.images[currentIndex].imgDesc;
            });
            btnPrev.addEventListener('click', () => {
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = x.images.length - 1;
                }
                imageBox.src = `images/${x.images[currentIndex].img}`;
                imageBox.alt = x.images[currentIndex].imgDesc;
            });

            carousel.appendChild(cards)
        });
    }
    initCardCarousel();
}
function initCardCarousel() {
    const cards = document.querySelectorAll('.place-card')
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }
    showCard(currentCardIndex);

    if (prevBtn && nextBtn)
    {
        prevBtn.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
            showCard(currentCardIndex);
        });
        nextBtn.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            showCard(currentCardIndex);
        });
    }
}
createCarousel();

// CONTACT US PAGE
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-box');
    if (form) {
        const fields = ['first', 'last', 'phone', 'email', 'start-date', 'end-date', 'description'];

        const trips = document.querySelector('.my-trips')
        const saved = JSON.parse(localStorage.getItem('tripFormData') || '{}');
        if (Object.keys(saved).length > 0) {
            trips.innerHTML = `
            <h2>Planned Trips ▾</h2>
            <ul>
                <li><strong>Name:</strong> ${saved.first || ''} ${saved.last || ''}</li>
                <li><strong>Phone:</strong> ${saved.phone || ''}</li>
                <li><strong>Email:</strong> ${saved.email || ''}</li>
                <li><strong>Start Date:</strong> ${saved['start-date'] || ''}</li>
                <li><strong>End Date:</strong> ${saved['end-date'] || ''}</li>
                <li><strong>Expectations:</strong> ${saved.description}</li>
            </ul>
            `;

            const tripList = document.querySelector('.my-trips ul');
            tripList.classList.add('trip-content');
            const tripContent = document.querySelector('.trip-content');
            const openBox = trips.querySelector('h2');
            if (tripContent) {
                openBox.addEventListener('click', () => {
                    tripContent.classList.toggle('show');
                });
            }
        } else {
            const text = document.createElement('p')
            text.textContent= 'No trips planned yet.';
            trips.appendChild(text);
        }
        if (!localStorage.getItem('tripFormSubmitted')) {
            fields.forEach(name => {
                const element = form.elements[name];
                if (element && saved[name]) element.value = saved[name];
            });
        }
        form.addEventListener('input', () => {
            const data = {};
            fields.forEach(name => {
                const element = form.elements[name];
                if (element) data[name] = element.value;
            });
            localStorage.setItem('tripFormData', JSON.stringify(data));
        });
        form.addEventListener('submit', () => {
            const data = {};
            fields.forEach(name => {
                const element = form.elements[name];
                if (element) data[name] = element.value;
            });
            localStorage.setItem(JSON.stringify(data));
            localStorage.setItem('tripFormSubmitted', 'true');
        });
    }
});