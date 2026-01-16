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
        console.log(data);
        data.forEach(company => {
            const card = document.createElement("section");
            card.classList.add('card-box');
            card.innerHTML = `<img src="${company.logo}" width="150" height="150" loading="lazy">
            <h3>Company name: ${company.companyName}</h3>
            <p>Address: ${company.address}</p>
            <p>Phone number: ${company.phone}</p>
            <p>Website: ${company.website}</p>
            <p>Membership Level: ${company.membershipLevel}</p>`;
        
            cards.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching members:', error)
    });
}

createCards();

const display1 = document.querySelector("#display-btn1");
display1.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');
});
const display2 = document.querySelector("#display-btn2");
display2.addEventListener('click', () => {
    cards.classList.toggle('list');
    cards.classList.remove('grid');
});