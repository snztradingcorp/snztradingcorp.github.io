const categories = ["Barrel", "Scope", "Flashlight", "Weapons Light", "Knife", "Other"];

const links = ["about", "products", "contact", "wishlist"];

const aboutHTML = `
                    <div class="metadata">
                        <h1>SNZ Trading Corporation.</h1>
                        <h2>We Sell Hunting Gear!</h2>
                        <div class="links">
                            <button type="button"><a href="./products.html">Products</a></button>
                            <button type="button"><a href="./contact.html">Contact</a></button>
                        </div>
                    </div>

                    <div class="images">
                        <div class="wrapper">
                            <img src="./images/default/default_1.jpg" alt="Image of Hunting Gear" />
                        </div>
                        <div class="wrapper">
                            <img src="./images/default/default_2.jpg" alt="Image of Hunting in the Wild" />
                        </div>
                    </div>

                    <div class="catalog">
                        <div class="meta">
                            <h3>Catalog</h3>
                            <h4>Our Item Categories</h4>
                        </div>
                        <!--
                            Weapon Icons were taken from flaticon.com
                        -->
                        <div class="container">
                            <div class="card">
                                <div class="icon">
                                    <img src="./images/default/icon_scopes.png" alt="Item Icon" />
                                </div>
                                <div class="info">
                                    <div class="name">Weapon Scopes</div>
                                    <div class="description">Zero in on your target with our high-quality weapon scopes designed for clarity and accuracy. Whether you're hunting at dawn or dusk, our optics give you the edge you need.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                    <img src="./images/default/icon_barrels.png" alt="Item Icon" />
                                </div>
                                <div class="info">
                                    <div class="name">Weapon Barrels</div>
                                    <div class="description">Upgrade your firearm's accuracy and range with our precision-engineered barrels. We offer a selection crafted for durability, performance, and improved shot consistency.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                    <img src="./images/default/icon_lights.png" alt="Item Icon" />
                                </div>
                                <div class="info">
                                    <div class="name">Weapon Lights</div>
                                    <div class="description">Enhance your target visibility with our powerful weapon-mounted lights. Built for tactical advantage, these lights are shockproof and compatible with various firearms.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                    <img src="./images/default/icon_knives.png" alt="Item Icon" />
                                </div>
                                <div class="info">
                                    <div class="name">Utility Knives</div>
                                    <div class="description">Our rugged utility knives are designed for durability and precision in any outdoor or tactical situation. Whether you're field dressing game or cutting through tough material, our blades deliver performance.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                    <img src="./images/default/icon_flashlights.png" alt="Item Icon" />
                                </div>
                                <div class="info">
                                    <div class="name">Flashlights</div>
                                    <div class="description">Illuminate the darkest trails with our high-lumen flashlights built for extreme conditions. Compact, durable, and waterproof—perfect for hunters, campers, and survivalists.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                    <img src="./images/default/icon_gear.png" alt="Item Icon" />
                                </div>
                                <div class="info">
                                    <div class="name">Other</div>
                                    <div class="description">We also stock a wide range of essential hunting gear like earbuds, sharpening tools, and assistive accessories. These items are curated to support comfort, safety, and efficiency in the field.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contact">
                        <div class="text">
                            Interested? Contact us for more!
                        </div>
                        <div class="button"><a href="./contact.html">Contact</a></div>
                    </div>
`;

const productsHTML = `
                    <h1>Hunting Gear Catalog</h1>

                    <div class="filters">
                        <input type="text" id="search" placeholder="Search..." oninput="applyFilters()">
                        <select id="category" onchange="applyFilters()">
                            <option value="">All Categories</option>
                        </select>
                        <input type="number" id="minPrice" placeholder="Min Price" oninput="applyFilters()">
                        <input type="number" id="maxPrice" placeholder="Max Price" oninput="applyFilters()">
                        <button onclick="clearFilters()">Clear Filters</button>
                    </div>
                
                    <div class="catalog" id="catalog"></div>
                
                    <div class="modal" id="modal">
                        <div class="modal-content">
                            <span class="close-btn" onclick="closeModal()">&times;</span>
                            <div class="modal-body">
                                <img id="modal-img" class="modal-img" />
                                <div class="modal-info">
                                  <h2 id="modal-title"></h2>
                                  <span>Brand: <span class="brand" id="modal-brand"></span></span>
                                  <span>Condition: <span class="condition" id="modal-condition"></span></span>
                                  <span>Price: <span class="price" id="modal-price"></span></span>
                                  <p id="modal-description"></p>
                                  <ul id="modal-details" class="details-list"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
`;

const contactHTML = `
<div class="hero-newsletter">
  <div class="text-content-title">
    <div class="title">Reach Out!</div>
    <div class="subtitle">Contact US for More!</div>
  </div>
  <div class="form-newsletter">
    <div class="input-field">
      <div class="input">
        <div class="value">snztradingcorporation@gmail.com</div>
      </div>
    </div>
    <div class="button">
      <div class="button2">Copy</div>
    </div>
  </div>
</div>
`;

// snztradingcorporation@gmail.com
// 718 644 7560