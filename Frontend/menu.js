fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

  
fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(menuItems => {
        const menuContainer = document.getElementById('menu');
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('col-lg-6', 'col-md-6', 'col-sm-12', 'col-xs-12');

            menuItem.innerHTML = `
                <div class="offer-item">
                    <img src="${item.image_url}" class="img-responsive">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="offer-price">$${item.price}</span>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    })
    .catch(error => console.error("Error fetching menu items:", error));
