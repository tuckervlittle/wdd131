const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.getElementById('currentyear').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastmodified').textContent = lastModified.toLocaleString();
});

document.addEventListener("DOMContentLoaded", () => {
    const temperature = 10;
    const conditions = "Sunny";
    const speed = 5;
    const unit = "C";
  
    function calculateWindChill(temperature, speed, unit = "C") {
        return unit.toUpperCase() === "C"
            ? (35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16)).toFixed(2)
            : (13.12 + 0.6215 * temperature - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temperature * Math.pow(speed, 0.16)).toFixed(2);
    }
  
    function displayWindChill(temperature, speed, unit = "C") {
        const isViable =
            (unit.toUpperCase() === "F" && temperature <= 50 && speed > 3) ||
            (unit.toUpperCase() === "C" && temperature <= 10 && speed > 4.8);
  
        return isViable ? calculateWindChill(temperature, speed, unit) : "N/A";
    }

    const windChillValue = displayWindChill(temperature, speed, unit);
  
    document.getElementById("temperature").textContent = `${temperature} °${unit}`;
    document.getElementById("condition").textContent = `${conditions}`;
    document.getElementById("speed").textContent = `${speed} ${unit === "F" ? "mph" : "km/h"}`;
    document.getElementById("windChill").textContent = `${windChillValue} °${unit}`;
  });