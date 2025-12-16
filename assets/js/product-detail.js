document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        // Redirect or show error if no ID (for prototype, just load first)
        // window.location.href = 'shop.html';
        loadProduct(products[0]); // Load first item as fallback
        return;
    }

    const product = products.find(p => p.id === productId);

    if (product) {
        loadProduct(product);
    } else {
        document.querySelector('.product-page-wrapper').innerHTML = '<div class="text-center" style="padding: 100px;"><h2>Product Not Found</h2><a href="shop.html" class="btn-outline">Back to Shop</a></div>';
    }

    function loadProduct(p) {
        // Update Meta
        document.title = `${p.title} | Asili Gems`;

        // Update Breadcrumbs
        const breadcrumbs = document.getElementById('prodBreadcrumbs');
        breadcrumbs.innerHTML = `<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <span class="current">${p.title}</span>`;

        // Update Info
        document.getElementById('prodTitle').innerText = p.title;
        document.getElementById('prodPrice').innerText = p.price;
        document.getElementById('prodDesc').innerText = p.desc;
        document.getElementById('specGem').innerText = p.gemstone;
        document.getElementById('specCat').innerText = p.category;

        // Update Images
        const mainImg = document.getElementById('mainImage');
        mainImg.src = p.img;
        mainImg.alt = p.title;

        // Thumbnails (Mocking duplicates for layout)
        document.getElementById('thumb1').src = p.img;
        document.getElementById('thumb2').src = p.img; // Real app would have p.images[]
        document.getElementById('thumb3').src = p.img;

        // Related Products (Mock: Same Category)
        const related = products.filter(item => item.category === p.category && item.id !== p.id).slice(0, 3);
        renderRelated(related);
    }

    function renderRelated(items) {
        const grid = document.getElementById('relatedGrid');
        if (items.length === 0) {
            grid.innerHTML = '<p class="text-center">No related items found.</p>';
            return;
        }
        
        grid.innerHTML = items.map(item => `
            <div class="product-card">
                <div class="prod-img-wrapper">
                    <a href="product.html?id=${item.id}">
                        <img src="${item.img}" alt="${item.title}" class="prod-img">
                    </a>
                </div>
                <span class="prod-cat">${item.category}</span>
                <h3 class="prod-name"><a href="product.html?id=${item.id}">${item.title}</a></h3>
                <div class="prod-price">${item.price}</div>
            </div>
        `).join('');
    }

    // Qty Logic
    window.updatePageQty = (change) => {
        const input = document.getElementById('pageQtyInput');
        let val = parseInt(input.value);
        val += change;
        if (val < 1) val = 1;
        input.value = val;
    };
});
