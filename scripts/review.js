//--------------------Number of Reviews Tracker--------------------
// Link Review Counter Element fromHTML
let reviewCounter = document.querySelector("#reviewCounter"); // Link reviewCounter to the HTML element with the ID of reviewCounter
let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0; // Get the current count, or set to 0 if not found

// Add one to the review count variable. We are assuming that each time the page is loaded, a review has been submitted.
reviewCount++;

// Update the text content of the reviewCounter element based on the count
if (reviewCount === 1) {
    reviewCounter.innerHTML = `<p>This is your <span class="highlight">first</span> review. 🥳 Welcome!</p>`;
} else {
    reviewCounter.innerHTML = `<p>You have submitted <span class="highlight">${reviewCount}</span> reviews.</p>`;
}

// Store the updated count back to localStorage
localStorage.setItem("reviewCount-ls", reviewCount);