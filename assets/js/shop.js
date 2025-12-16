document.addEventListener('DOMContentLoaded', () => {
    // STATE
    let currentProducts = [...products]; // copy from products.js
    let activeCategory = 'all';
    let activeGemstone = 'all';
    let maxPrice = 10000;
    let sortBy = 'featured';

    // DOM ELEMENTS
    const grid = document.getElementById('productGrid');
    const countLabel = document.getElementById('prodCount');
    const catList = document.getElementById('catFilters');
    const gemList = document.getElementById('gemFilters');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortSelect = document.getElementById('sortSelect');

    // --- INITIALIZATION ---
    function init() {
        renderFilters();
        applyFilters(); // Initial render
        
        // Event Listeners
        priceRange.addEventListener('input', (e) => {
            maxPrice = parseInt(e.target.value);
            priceValue.textContent = maxPrice >= 10000 ? '$10,000+' : `$${maxPrice}`;
            applyFilters();
        });

        sortSelect.addEventListener('change', (e) => {
            sortBy = e.target.value;
            applyFilters();
        });
    }

    // --- RENDERING ---
    function renderFilters() {
        // Categories
        const categories = ['all', ...new Set(products.map(p => p.category))];
        catList.innerHTML = categories.map(cat => `
            <li>
                <button class="filter-btn ${cat === activeCategory ? 'active' : ''}" 
                        onclick="setCategory('${cat}')">
                    ${capitalize(cat)}
                </button>
            </li>
        `).join('');

        // Gemstones
        const gemstones = ['all', ...new Set(products.map(p => p.gemstone))];
        gemList.innerHTML = gemstones.map(gem => `
            <li>
                <button class="filter-btn ${gem === activeGemstone ? 'active' : ''}" 
                        onclick="setGemstone('${gem}')">
                    ${capitalize(gem)}
                </button>
            </li>
        `).join('');
    }

    function renderGrid(data) {
        if (data.length === 0) {
            grid.innerHTML = '<div class="no-results">No products found matching your criteria.</div>';
            countLabel.textContent = '0';
            return;
        }

        countLabel.textContent = data.length;
        grid.innerHTML = data.map((product, index) => {
            const globalIndex = products.findIndex(p => p.id === product.id);
            
            return `
            <div class="product-card group">
                <div class="prod-img-wrapper">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.img}" alt="${product.title}" class="prod-img">
                    </a>
                    <!-- Overlay Actions -->
                    <div class="overlay-actions desktop-only">
                        <button class="action-btn" onclick="openModal(${globalIndex})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn" title="Add to Bag">
                            <i class="fas fa-shopping-bag"></i>
                        </button>
                    </div>
                </div>
                <span class="prod-cat">${product.category}</span>
                <h3 class="prod-name"><a href="product.html?id=${product.id}">${product.title}</a></h3>
                <div class="prod-price">${product.price}</div>
                <!-- Mobile Actions -->
                <div class="mobile-actions mobile-only" style="display: none;">
                     <button class="btn-quick" onclick="openModal(${globalIndex})">Quick View</button>
                </div>
            </div>
            `;
        }).join('');
    }

    // --- LOGIC ---
    window.setCategory = (cat) => {
        activeCategory = cat;
        renderFilters(); // Re-render to update active class
        applyFilters();
    };

    window.setGemstone = (gem) => {
        activeGemstone = gem;
        renderFilters();
        applyFilters();
    };

    function applyFilters() {
        let filtered = products.filter(p => {
            const matchCat = activeCategory === 'all' || p.category === activeCategory;
            const matchGem = activeGemstone === 'all' || p.gemstone === activeGemstone;
            const matchPrice = p.priceValue <= maxPrice;
            return matchCat && matchGem && matchPrice;
        });

        // Sorting
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.priceValue - b.priceValue);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.priceValue - a.priceValue);
        } else if (sortBy === 'newest') {
            filtered.sort((a, b) => b.id - a.id); // Assuming higher ID is newer
        }
        // 'featured' keeps default order

        renderGrid(filtered);
    }

    // Utility
    function capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    init();
});
