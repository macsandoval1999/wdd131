// Select DOM elements needed for Wind Chill Calculation
const temperature = document.getElementById("temperature");
const windChill = document.getElementById("wind-chill");
const speed = document.getElementById("speed");
const condition = document.getElementById("condition");

// Function to calculate Wind Chill
function calculateWindChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        let chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        return chill.toFixed(2);
    } else {
        return "N/A";
    }
}

let temp = parseFloat(temperature.textContent);
let spd = parseFloat(speed.textContent);
windChill.textContent = Math.round(calculateWindChill(temp, spd));