const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.getElementById('currentyear').textContent = year;

  const lastModified = new Date(document.lastModified);
  document.getElementById('lastmodified').textContent = lastModified.toLocaleString();
});

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

document.addEventListener("DOMContentLoaded", function () {
const selectProduct = document.getElementById('product_name');

if (selectProduct) {
    products.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        selectProduct.appendChild(option);
    });
} 
});
