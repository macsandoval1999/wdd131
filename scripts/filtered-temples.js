// -----Script for navigation menu toggle-----
    // DOM elements
        const menu = document.querySelector('nav');   
        const menuSymbol = document.querySelector('#menu');
    // Event listener
        menuSymbol.addEventListener('click', function() {
            menu.classList.toggle('show-nav');
            menuSymbol.classList.toggle('show-nav');
        });



// -----Script for filtering temples by area-----
    // Temple data
        const temples = [
            {
                templeName: "Aba Nigeria",
                location: "Aba, Nigeria",
                dedicated: "2005, August, 7",
                area: 11500,
                imageUrl:
                    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
            },
            {
                templeName: "Manti Utah",
                location: "Manti, Utah, United States",
                dedicated: "1888, May, 21",
                area: 74792,
                imageUrl:
                    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
            },
            {
                templeName: "Payson Utah",
                location: "Payson, Utah, United States",
                dedicated: "2015, June, 7",
                area: 96630,
                imageUrl:
                    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
            },
            {
                templeName: "Yigo Guam",
                location: "Yigo, Guam",
                dedicated: "2020, May, 2",
                area: 6861,
                imageUrl:
                    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
            },
            {
                templeName: "Washington D.C.",
                location: "Kensington, Maryland, United States",
                dedicated: "1974, November, 19",
                area: 156558,
                imageUrl:
                    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
            },
            {
                templeName: "Lima Perú",
                location: "Lima, Perú",
                dedicated: "1986, January, 10",
                area: 9600,
                imageUrl:
                    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
            },
            {
                templeName: "Mexico City Mexico",
                location: "Mexico City, Mexico",
                dedicated: "1983, December, 2",
                area: 116642,
                imageUrl:
                    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
            },
            // Add more temple objects here...
        ];
        
    // DOM element for heading
        let heading = document.querySelector('h2');

    // Function: Build the temple cards
        function createTempleCards(filteredTemples) {
            filteredTemples.forEach(temple => {
                let card = document.createElement('section');
                card.classList.add('temple-card');

                let name = document.createElement('h3');
                let location = document.createElement('p');
                let dedication = document.createElement('p');
                let area = document.createElement('p');
                let image = document.createElement('img');

                name.textContent = temple.templeName;
                location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
                dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
                area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
                image.setAttribute('src', temple.imageUrl);
                image.setAttribute('alt', `${temple.templeName} Temple Image`);
                image.setAttribute('loading', 'lazy');

                card.appendChild(name);
                card.appendChild(location);
                card.appendChild(dedication);
                card.appendChild(area);
                card.appendChild(image);

                document.querySelector('.album').appendChild(card);
            });
        };

    // Initial load of all temples
        createTempleCards(temples);



    //Script: Initial Load (Home) Show all temples
        const homeLink = document.querySelector('#home');
        homeLink.addEventListener('click', function () {
            document.querySelector('.album').innerHTML = '';
            createTempleCards(temples);
            heading.textContent = homeLink.textContent;
        });


    // Script: Filter temples (Old) for temples
        const oldTemplesLink = document.querySelector('#old');
        oldTemplesLink.addEventListener('click', function () {
            document.querySelector('.album').innerHTML = '';
            createTempleCards(temples.filter(temple => {
                const dedicatedYear = new Date(temple.dedicated).getFullYear();
                return dedicatedYear < 1900;
            }));
            heading.textContent = oldTemplesLink.textContent;
        });
 

    // Script: Filter temples (New) for temples
        const newTemplesLink = document.querySelector('#new');
        newTemplesLink.addEventListener('click', function () {
            document.querySelector('.album').innerHTML = '';
            createTempleCards(temples.filter(temple => {
                const dedicatedYear = new Date(temple.dedicated).getFullYear();
                return dedicatedYear >= 2000;
            }));
            heading.textContent = newTemplesLink.textContent;
        }); 

    // Script: Filter temples (Large) for temples
        const largeTemplesLink = document.querySelector('#large');
        largeTemplesLink.addEventListener('click', function () {
            document.querySelector('.album').innerHTML = '';
            createTempleCards(temples.filter(temple => {
                return temple.area > 90000;
            }));
            heading.textContent = largeTemplesLink.textContent;
        });

    // Script: Filter temples (Small) for temples
        const smallTemplesLink = document.querySelector('#small');
        smallTemplesLink.addEventListener('click', function () {
            document.querySelector('.album').innerHTML = '';
            createTempleCards(temples.filter(temple => {
                return temple.area <= 10000;
            }));
            heading.textContent = smallTemplesLink.textContent;
        });
