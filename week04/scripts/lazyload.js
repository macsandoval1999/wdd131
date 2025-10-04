const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;
const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;