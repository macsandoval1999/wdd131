let firstName = "John";
let lastName = "Doe";

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);

