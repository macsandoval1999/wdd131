// -----Script for navigation menu toggle-----
    // DOM elements
        const menu = document.querySelector('nav');   
        const menuSymbol = document.querySelector('#menu');
    // Event listener
        menuSymbol.addEventListener('click', function() {
            menu.classList.toggle('show-nav');
            menuSymbol.classList.toggle('show-nav');
        });

// -----Script for footer date-----
// Get current date
const today = new Date(); // Create a new Date object with the current date and time

// Get current year
//Used in: footer
const year = document.querySelector("#currentyear"); // Select the element with id 'currentyear'
year.innerHTML = `${today.getFullYear()}`; // Set its inner HTML to the year stored in 'today'

// Alternative method to get year using textContent
// const currentYear = document.querySelector('#currentyear');
// currentYear.textContent = new Date().getFullYear();


// Set last modified date
//Used in: footer
const lastModified = document.querySelector('#lastModified'); // Select the element with id 'lastModified'
lastModified.innerHTML = `Last Modification: ${document.lastModified}`; // Set its inner HTML to the last modified date of the document




