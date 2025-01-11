const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModified = document.getElementById("lastmodified");
if (lastModified) {
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
}