function initializeCategoryFilter(categories) {
  // Initialize all available categories in dropdown
  const categoryFilter = document.getElementById("category");
  for(let i=0; i<categories.length; i++) {
    const value = categories[i];
    categoryFilter.innerHTML += '<option value="' + value + '">' + value + '</option>'
  }
}

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
      <img src="images/${item.asin}.jpg" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">$${item.price.toFixed(2)}</div>
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
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
}


// Below functions are called as soon as the script is loaded
renderItems(items);
initializeCategoryFilter(categories);
