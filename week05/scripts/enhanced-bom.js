// -------------DOM VARIABLES--------------

const input = document.querySelector('#favchap');
// Get the input field with id 'favchap'
const button = document.querySelector('button');
// Get the button element
const list = document.querySelector('#list'); 
// Get the list element with id 'list'

// -------------LOCAL STORAGE VARIABLES--------------
let chaptersArray = getChaptersArray() || []; //Get the chapters array from local storage or create an empty array if it doesn't exist


// -------------EVENT LISTENERS--------------

//When the button is clicked, do the following:
button.addEventListener('click', function ()
{ //when the button is clicked, do the following:
    if (input.value.trim() !== '') //if the input field is not empty or just spaces, do the following:
    {
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); //Add the chapter to the chapter array
        setChapterList(); //Save the chapter array to local storage
        input.value = ''; //Clear the input field
        input.focus(); //Focus back on the input field
    }
});

//When "Enter" is pressed while on the input field, do the following:
input.addEventListener('keydown', function (event) { 
    if (event.key === "Enter" && input.value !== "") //if the input field is not empty or just spaces, add the chapter
    {
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); //Add the chapter to the chapter array
        setChapterList(); //Save the chapter array to local storage
        input.value = ''; //Clear the input field
        input.focus(); //Focus back on the input field
    }
});


//-------------FUNCTIONS--------------

// Function to display a chapter in the list
function displayList(chapter) {
    let li = document.createElement('li'); //Create a item <li> that will hold the chapter name and the delete button
    let deletebutton = document.createElement('button'); //Create a delete button <button> that will be used to delete the chapter from the list
    li.textContent = chapter; //Set the text of the item to the value that was in the input field. note the use of the displayList parameter 'chapter'
    deletebutton.textContent = '❌'; //Set the text of the delete button to a cross mark
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button

    li.appendChild(deletebutton);//Actually add the delete button to the item. deleteButton is now a child of item
    list.appendChild(li);//Actually add the item to the list. item is now a child of list

    deletebutton.addEventListener('click', function () { //When the delete button is clicked, do the following:
        list.removeChild(li); //Remove the item from the list
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input field
    });
}

// Function to set the chapters array to local storage
function setChapterList() {
    localStorage.setItem('savedChapters-ls', JSON.stringify(chaptersArray)); //Save the chapters array to local storage as a string. Remember, savedChapters-ls is the name of the key we are giving it. Also remember that local storage can only store strings, so we need to stringify the array.
}

// Function to get the chapters array from local storage
function getChaptersArray() {
    return JSON.parse(localStorage.getItem('savedChapters-ls')); //Get the chapters array from local storage and parse it back into an array. Remember, savedChapters-ls is the name of the key we gave it in setChapterList(). Also remember that if there is nothing in local storage, this will return null. Also remember that it needs to be parsed back into an array because it was stringified when it was saved.
}

// Function to delete a chapter from the chapters array and update local storage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter); //Filter the chapters array to remove the chapter that was deleted from the list
    setChapterList(); //Save the updated chapters array to local storage
}


// ----------SCRIPT TO GET CHAPTERS FROM LOCAL STORAGE------------
chaptersArray.forEach(chapter => { //For each chapter in the chapters array, do the following:
    displayList(chapter); //Display the chapter in the list
});

// --------DESCRIPTION OF PROCESS FLOW----------
// When page loads, the DOM variables are created to reference the input field, button, and list. The array to hold the chapters is created and populated from local storage if it exists using the getChaptersArray() function.
// LINE 80 - The chapters array is populated from local storage (if it exists) and each chapter is displayed using the displayList() function which populates the list on the front-end so users can see the saved chapters.
// When the button is clicked or "Enter" is pressed, the chapter in the input field is constructed and added to the list and the chapters array is updated and saved to local storage. This is done using the displayList() function and the setChapterList() function which are called when the button is clicked or "Enter" is pressed.
// When the delete button is clicked, the chapter is removed from the list and the chapters array is updated and saved to local storage. This is done using the deleteChapter() function which is called when the delete button is clicked. The deleteChapter() function calls the setChapterList() function to update local storage.