const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.getElementById('currentyear').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastmodified').textContent = lastModified.toLocaleString();
});