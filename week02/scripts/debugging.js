// How script works:
// 1. Get references to the output elements in the HTML. line 6-7.
// 2. Declare variables for area, PI, and radius. line 12-14.
// 3. Calculate area of circle with current radius. line 19.
// 4. Display radius and area in the output elements. line 21-22.
// 5. Change radius to a new value, make calculations again with new radius, display results which replaces old text content.

let radiusOutput = document.getElementById('radius'); //ERROR 6 [const radiusOutput = document.getElementById('radius');]: const radiusOutput is reclared again later in the code, so it should be declared with let instead of const
let areaOutput = document.querySelector('#area'); // ERROR 5 [const areaOutput = document.querySelector('area');]: Missing # for ID selector. Without it, it looks for an element by tag name, which doesn't exist. In our HTML you can see we have <span id="area"></span>.
//ERROR 7 [const areaOutput = document.getElementById('radius');]: const radiusOutput is reclared again later in the code, so it should be declared with let instead of const

let area = 0;
const PI = 3.14159; //ERROR 1 [PI == 3.14159;]: == checks if two values are equal, = assigns a value to a variable
let radius = 10; // ERROR 4 [const radius = 10;]: radius is reassigned later in the code, so it should be declared with let instead of const

area = PI * radius * radius;

radiusOutput.textContent = radius; //ERROR 2 [radiusOutput = radius;]: radiusOutput is a DOM element, not a variable for a number. If the instructions say to display the radius, you need to set the text content of the element.
areaOutput.textContent = area; // ERROR 3 [areaOutput = area;]: areaOutput is a DOM element, not a variable for a number. If the instructions say to display the area, you need to set the text content of the element.

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;