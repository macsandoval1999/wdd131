// -------------DOM VARIABLES--------------

const input = document.querySelector('#favchap');
// Get the input field with id 'favchap'
const button = document.querySelector('button');
// Get the button element
const list = document.querySelector('#list'); 
// Get the list element with id 'list'


// -------------EVENT LISTENERS--------------

//When the button is clicked, do the following:
button.addEventListener('click', function ()
{ //when the button is clicked, do the following:
    if (input.value.trim() !== '') //if the input field is not empty or just spaces, do the following:
    {
        addChapter();
    }
});

//When "Enter" is pressed while on the input field, do the following:
input.addEventListener('keydown', function (event) { 
    if (event.key === "Enter" && input.value !== "") //if the input field is not empty or just spaces, add the chapter
    {
        addChapter();
    }
});


//-------------FUNCTIONS--------------

//Function to add a chapter to the list
function addChapter() {
    if (input.value.trim() !== '') //if the input field is not empty or just spaces, do the following:
    {
        const item = document.createElement('li'); //Create a item <li> that will hold the chapter name and the delete button
        item.textContent = input.value; //Set the text of the item to the value that was in the input field
        const deleteButton = document.createElement('button'); //Create a delete button <button> that will be used to delete the chapter from the list
        deleteButton.textContent = '❌'; //Set the text of the delete button to a cross mark
        item.appendChild(deleteButton);//Actually add the delete button to the item. deleteButton is now a child of item
        list.appendChild(item);//Actually add the item to the list. item is now a child of list

        deleteButton.addEventListener('click', function () { //When the delete button is clicked, do the following:
            list.removeChild(item); //Remove the item from the list
            input.focus(); //Focus back on the input field
        });
    }
    //At the end of the button click, do the following:
    input.value = ''; //Clear the input field
    input.focus(); //Focus back on the input field
};