/* General
    Called each time script is loaded
*/
function initialize() {
    document.getElementById("about-link").addEventListener("click", () => run(0));
    document.getElementById("products-link").addEventListener("click", () => run(1));
    document.getElementById("contact-link").addEventListener("click", () => run(2));
    document.getElementById("wishlist-link").addEventListener("click", () => run(3));

    run(0); // About page
}

/* General
    Ensures correct styling is being applied for each page, disables other stylesheets
*/

function updateLinks(pageNumber, links) {
    // console.log(links);
    for(let i=0; i<links.length; i++) {
        const query = `link[href="./styles/${links[i]}.css"]`;
        // console.log(query);
        const link = document.querySelector(query);
        // console.log(link);
        if(link) {
            if(i === pageNumber) {
                link.disabled = false;
            } else {
                link.disabled = true;
            }
        }
    }
}

/* General
    Function called during intialization process 
*/
function run(pageNumber) {
    console.log(pageNumber);
    if(pageNumber === 0) { //About page
        document.getElementsByClassName("main")[0].innerHTML = aboutHTML;
    } else if(pageNumber === 1) { // Products Page
        document.getElementsByClassName("main")[0].innerHTML = productsHTML;
        initializeCategoryFilter(categories);
        renderItems(items);
    } else if(pageNumber === 2) { // Contact Page
        document.getElementsByClassName("main")[0].innerHTML = contactHTML;
    } else { //Wishlist

    }

    updateLinks(pageNumber, links);
}

/*  Products Page
    Populate categories dropdown to show all categories
*/
function initializeCategoryFilter(categories) {
  // Initialize all available categories in dropdown
  const categoryFilter = document.getElementById("category");
  for(let i=0; i<categories.length; i++) {
    const value = categories[i];
    categoryFilter.innerHTML += '<option value="' + value + '">' + value + '</option>'
  }
}

/*  Products Page
    Populates catalog element with all the items
*/
function renderItems(filteredItems) {
    const catalog = document.getElementById('catalog');
    if(filteredItems.length === 0) {
        catalog.innerHTML = '<h3 style="text-align: center">No Items Found.</h3>'
        return;
    }

    catalog.innerHTML = '';
    filteredItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'item';
        el.innerHTML = `
          <img src="images/catalog/${item.asin}.jpg" alt="${item.name}">
          <h3>${item.name}</h3>
          <div class="price">$ ${item.price.toFixed(2)}</div>
        `;
        el.onclick = () => showDetails(item);
        catalog.appendChild(el);
    });
}


function applyFilters() {
  const search = document.getElementById('search').value.toLowerCase();
  const category = document.getElementById('category').value;
  const minPrice = parseFloat(document.getElementById('minPrice').value);
  const maxPrice = parseFloat(document.getElementById('maxPrice').value);

  const filtered = items.filter(item => {
    return (
      (!search || item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search) || item.category.toLowerCase().includes(search)) &&
      (!category || item.category === category) &&
      (isNaN(minPrice) || item.price >= minPrice) &&
      (isNaN(maxPrice) || item.price <= maxPrice)
    );
  });

  renderItems(filtered);
}

function clearFilters() {
  document.getElementById('search').value = '';
  document.getElementById('category').value = '';
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  renderItems(items);
}

function showDetails(item) {
  document.getElementById('modal-title').textContent = item.name;
  document.getElementById('modal-description').textContent = item.description;
  document.getElementById('modal-brand').textContent = item.brand;
  document.getElementById('modal-condition').textContent = "New";
  document.getElementById('modal-price').textContent = "$ " + parseFloat(item.price).toFixed(2);
  document.getElementById('modal-img').src = "./images/catalog/" + item.asin + ".jpg";

  const detailsList = document.getElementById('modal-details');
  detailsList.innerHTML = ''; // Clear existing items

  if (item.details && item.details.length > 0) {
    item.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      detailsList.appendChild(li);
    });
    detailsList.style.display = 'block';
  } else {
    detailsList.style.display = 'none';
  }

  document.getElementById('modal').style.display = 'flex';
}

/*  Products Page
    Close the modal displaying item information
*/
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
};

initialize();