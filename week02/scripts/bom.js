const input = document.querySelector('#favchap');
// Get the input field with id 'favchap'
const button = document.querySelector('button');
// Get the button element
const list = document.querySelector('#list'); 
// Get the list element with id 'list'

const li = document.createElement('li');
// create a list item. This will hold the text and the button.
li.textContent = input.value;
// set the text of the list item to the value that was in the input field

const deleteButton = document.createElement('button');
// create a delete button.
deleteButton.textContent = '❌';
// set the text of the delete button to a cross mark

li.appendChild(deleteButton);
// add the delete button to the list item

list.appendChild(li);
// add the list item to the list




