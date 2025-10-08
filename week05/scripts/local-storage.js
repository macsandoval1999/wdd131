// 1️⃣ Initialize display element variable
const todayDisplay = document.querySelector(".today"); // select the element with the class of today
const visitsDisplay = document.querySelector(".visits"); // select the element with the class of visits

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0; 
// Number: is needed because localStorage stores everything as strings. 
// window.localStorage: is the Web Storage API that allows you to store data in the browser that persists across page reloads and browser sessions.
// getItem("numVisits-ls"): retrieves the value associated with the key "numVisits-ls" from localStorage. If the key does not exist, it returns null and number(null) is 0.
// The || 0 ensures that if getItem returns null, numVisits will be set to 0.


// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) { // if numVisits is not equal to 0 (i.e., the user has visited before), display the number of visits to .visits element.
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`; // otherwise, display a welcome message assuming this is their first visit.
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

// 6️⃣ Display today's date in the .today element
todayDisplay.textContent = Date.now(); // Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC. The miliseconds are a large number that refers to the current date and time. It is based on when the internet was invented. This is called the "unix epoch" and is used to calculate time across different systems.

// 7️⃣ Extra Credit: Display more human friendly date information
const extraDateInfo = document.querySelector(".extraDateInfo"); // select the element with the class of extraDateInfo

const today = new Date(); // create a new Date object representing the current date and time
extraDateInfo.innerHTML =
    `
    <hr>
    <p><strong>1. numeric date:</strong> ${today.toLocaleDateString()}</p>
    <p><strong>2. time:</strong> ${today.toLocaleTimeString()}</p>
    <p><strong>3. string:</strong> ${today.toString()}</p>
    <p><strong>4. UTC:</strong> ${today.toUTCString()}</p>
    <p><strong>5. date:</strong> ${today.toDateString()}</p>
    <p><strong>6. ISO:</strong>  ${today.toISOString()}</p>
    <p><strong>7. Timezone:</strong> ${Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
    <p><strong>8. Day of Week:</strong> ${today.getDay()}</p>
    <p><strong>9. Day of Month:</strong> ${today.getDate()}</p>
    <p><strong>10. Month:</strong> ${today.getMonth() + 1}</p>
    <p><strong>11. Year:</strong> ${today.getFullYear()}</p>
    <p><strong>12. Hour:</strong> ${today.getHours()}</p>
    <p><strong>13. Minute:</strong> ${today.getMinutes()}</p>
    <p><strong>14. Second:</strong> ${today.getSeconds()}</p>
    <p><strong>15. Millisecond:</strong> ${today.getMilliseconds()}</p>
    <p><strong>16. Timezone Offset (minutes):</strong> ${today.getTimezoneOffset()}</p>
    <p><strong>17. Weekday Name:</strong> ${today.toLocaleDateString('en-US', { weekday: 'long' })}</p>
    <p><strong>18. Month Name:</strong> ${today.toLocaleDateString('en-US', { month: 'long' })}</p>
    <p><strong>19. Short Date:</strong> ${today.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>
    <p><strong>20. Custom Format:</strong> ${today.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>
    `;