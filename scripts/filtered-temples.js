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

// Create variables for the nav
const homeNav = document.getElementById("home");
const oldNav = document.getElementById("old");
const newNav = document.getElementById("new");
const largeNav = document.getElementById("large");
const smallNav = document.getElementById("small");


const container = document.querySelector(".grid");

// Event Listeners calling and filtering the 
// templeCard function and renaming the page title
homeNav.addEventListener("click", () => {
  createTempleCard(temples);
  document.getElementById("title").innerHTML = "Home";
});
// Filters temples older than 1900
// and renames the page title
oldNav.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
  document.getElementById("title").innerHTML = "Old";
});
// Filters temples newer than 2000
// and renames the page title
newNav.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
  document.getElementById("title").innerHTML = "New";
});
// Filters temples larger than 90,000 sq ft
// and renames the page title
largeNav.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > "90000"));
  document.getElementById("title").innerHTML = "Large";
});
// Filters temples smaller than 10,000 sq ft
// and renames the page title
smallNav.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < "10000"));
  document.getElementById("title").innerHTML = "Small";
});

// Call the templeCard function
createTempleCard(temples);

// Function to build HTML content
function createTempleCard(filteredTemples) {
  // Resets the .grid container to empty
  // Allows the filters to refill the page
  container.innerHTML = "";

  // Loop through temple list and sort the information
  filteredTemples.forEach(temple => {
    // Make a variable for each HTML element
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const size = document.createElement("p");
    const image = document.createElement("img");

    // Add class="card" to each section
    card.className = "card";

    // Add name, location, dedication date, size, 
    // and the image information from the list
    // to the HTML
    name.innerHTML = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated: </span>${dedicationDate(temple)}`;
    size.innerHTML = `<span class="label">Size: </span>${temple.area.toLocaleString('en-US')} sq ft`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    // Lazyload
    image.setAttribute("loading", "lazy");

    // Put it all together
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(size);
    card.appendChild(image);
    container.appendChild(card);
    
    // Function to rewrite the date to a neater format
    function dedicationDate(temple) {
      const splitDate = temple.dedicated.split(", ");
      const year = splitDate[0];
      const month = splitDate[1];
      const day = splitDate[2];
      return `${month} ${day}, ${year}`
    }
  });
}