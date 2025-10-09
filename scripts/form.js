// ------------Populate Product Dropdown List------------
// Product data
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

 // Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Link Product Element from HTML
const productSelect = document.getElementById("products");

// Clear existing options and repopulate
while (productSelect.options.length > 1) {
    productSelect.remove(1);
}

// Construct option elements using product data, ids as values, build the string to be displayed, and append to 'productSelect' which was linked to the HTML products list 
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${capitalizeWords(product.name)} (Avg. Rating: ${product.averagerating})`;
    productSelect.appendChild(option);
});