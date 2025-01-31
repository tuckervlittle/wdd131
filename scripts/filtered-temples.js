const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.getElementById('currentyear').textContent = year;

  const lastModified = new Date(document.lastModified);
  document.getElementById('lastmodified').textContent = lastModified.toLocaleString();
});

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('open');
  document.querySelector('#navigation').classList.toggle('open');
  hambutton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fresno California",
    location: "Fresno, California, United States",
    dedicated: "2000, April, 9",
    area: 10850,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/fresno-california-temple/fresno-california-temple-50642.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27-30",
    area: 42100,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3831-thumb.jpg"
  },
  {
    templeName: "Kona Hawaii",
    location: "Kailua-Kona, Hawaii, United States",
    dedicated: "2000, January, 23-24",
    area: 12325,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-47977-thumb.jpg"
  },
];
const home = document.getElementById("home");
const old = document.getElementById("old");
const newLink = document.getElementById("new");
const largeLink = document.getElementById("large");
const smallLink = document.getElementById("small");


const container = document.querySelector(".grid");

//Event Listeners
home.addEventListener("click", () => {
  createTempleCard(temples);
  document.getElementById("title").textContent = "Home"
});

old.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
  document.getElementById("title").textContent = "Old"
});

newLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
});

largeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > "90000"));
});

smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < "10000"));
});

createTempleCard(temples);

//Display Temples function
function createTempleCard(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.setAttribute("loading", "lazy");
    image.setAttribute("Alt", temple.templeName);
    image.setAttribute("width", "600");
    image.setAttribute("height", "400");

    const name = document.createElement("h2");
    name.innerHTML = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;

    const dedication = document.createElement("p");
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Size: </span>${temple.area.toLocaleString('es-ES')} sq ft`;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(image);
    container.appendChild(card);
  });
}