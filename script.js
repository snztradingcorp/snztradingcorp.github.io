/*

    {
        name:"",
        category:"",
        sku: "",
        asin: "",
        description: "",
        details: "",
        condition: "",
        price: 0.00,
        stock: 0
    }

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
    // el.innerHTML = `
    //   <img src="${item.img}" alt="${item.name}">
    //   <h3>${item.name}</h3>
    //   <p>${item.description}</p>
    //   <div class="price">$${item.price.toFixed(2)}</div>
    // `;
    el.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">$ ${item.price.toFixed(2)}</div>
    `;
    el.onclick = () => showDetails(item.name, `${item.description} ${item.details}`);
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

function showDetails(title, description) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
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

renderItems(items);