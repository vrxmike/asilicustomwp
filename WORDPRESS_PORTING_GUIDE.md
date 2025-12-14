# WordPress Integration: Neve Pro + Otter + Sparks (No-PHP / No-Child Theme Method)

**Objective:** Implement the "Asili Gems" custom design into your existing WordPress setup using **only** the Neve Pro Custom Layouts interface. No file uploads (FTP), no child themes, no PHP code editing.

**Core Tools:**
- **Neve Pro:** For "Custom Layouts" (Header, Footer, Content Injection).
- **Otter Pro:** For advanced blocks (if needed) or simply for the "Custom HTML" block capability.
- **WooCommerce:** The backend engine.
- **Media Library:** All images/videos uploaded via WP Admin.

---

## Phase 1: Global Styles (CSS)
Since we cannot upload a `.css` file via the WP Admin interface easily without a child theme, we will paste the styles into the Customizer.

1.  **Open:** Appearance > Customize > Additional CSS.
2.  **Action:** Copy the *entire contents* of your local `assets/css/palette.css` AND `assets/css/style.css` and paste them here.
    - *Tip:* Paste `palette.css` (variables) first, then `style.css` below it.
3.  **Save/Publish.**

---

## Phase 2: Global Logic (JavaScript)
We need your JavaScript (`app.js`) to run on every page to handle the Mobile Drawer, Modal, and Scroll effects.

1.  **Navigate:** Neve > Custom Layouts > Add New.
2.  **Name:** `Global JS Injection`.
3.  **Editor:** Use the **Custom HTML** block.
4.  **Content:**
    Paste the logic directly inside script tags. (We will merge `products.js` and `app.js` for simplicity here).
    ```html
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // --- 1. Header Scroll Effect ---
        window.addEventListener('scroll', () => {
            const header = document.getElementById('mainHeader');
            if (header) {
                if (window.scrollY > 20) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            }
        });

        // --- 2. Mobile Drawer Logic ---
        window.toggleDrawer = function() {
            const drawer = document.getElementById('mobileDrawer');
            if (drawer) {
                drawer.classList.toggle('active');
                document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : 'auto';
            }
        };

        // --- 3. Close Drawer on Click Outside ---
        const drawer = document.getElementById('mobileDrawer');
        if (drawer) {
            drawer.addEventListener('click', (e) => {
                if (e.target === drawer) toggleDrawer(); // Close if clicking the backdrop
            });
        }
    });
    </script>
    ```
5.  **Neve Settings (Sidebar):**
    - **Hooks:** `wp_footer` (This puts it at the very bottom of the page).
    - **Conditions:** Entire Website.
6.  **Publish.**

---

## Phase 3: The Custom Header
Replace the default Neve header with your HTML.

1.  **Upload Logo:** Go to **Media > Add New** and upload your logo. Copy the File URL.
2.  **Navigate:** Neve > Custom Layouts > Add New.
3.  **Name:** `Custom Asili Header`.
4.  **Editor:** Use the **Custom HTML** block.
5.  **Content:** Paste your `<header>...</header>` HTML code.
    - *Crucial Update 1:* Change the `<a>` links. Instead of `href="index.html"`, use `href="/"`.
    - *Crucial Update 2:* Find the `<img>` tag for your logo and replace the `src` with the **File URL** you copied from the Media Library.
6.  **Neve Settings:**
    - **Hooks:** `header` (Action: **Replace**).
    - **Conditions:** Entire Website.
7.  **Publish.**

---

## Phase 4: The Custom Footer
Replace the default Neve footer.

1.  **Navigate:** Neve > Custom Layouts > Add New.
2.  **Name:** `Custom Asili Footer`.
3.  **Editor:** Use the **Custom HTML** block.
4.  **Content:** Paste your `<footer>...</footer>` HTML code.
5.  **Neve Settings:**
    - **Hooks:** `footer` (Action: **Replace**).
    - **Conditions:** Entire Website.
6.  **Publish.**

---

## Phase 5: The "Headless" Shop (Grid)
We will hide the default WooCommerce grid and inject your custom grid container.

1.  **Upload Product Images:** Upload all product photos to **Media > Add New**. Copy their URLs.
2.  **Navigate:** Neve > Custom Layouts > Add New.
3.  **Name:** `Custom Shop Grid`.
4.  **Editor:** Custom HTML block.
5.  **Content:**
    ```html
    <div id="asili-shop-container" class="asili-container" style="padding: 100px 0;">
        <div class="text-center">
            <h1 class="hero-title" style="font-size: 3rem; color: var(--c-text-main);">Shop</h1>
        </div>
        <!-- The Grid where JS will inject cards -->
        <div id="product-grid" class="grid-3" style="margin-top: 40px;">
            <!-- Loading State -->
            <p style="grid-column: 1/-1; text-align: center;">Loading gemstones...</p>
        </div>
    </div>
    
    <script>
    // Fetch WooCommerce Products via REST API (Public Endpoint)
    // Note: You must enable 'Enable the legacy REST API' in WC Settings > Advanced > Legacy API
    // OR use the native WC AJAX endpoint if you don't want to expose keys.
    
    // FOR NOW: We will use the 'products' array from your static mock data 
    // to prove the layout works, then switch to real data later.
    const mockProducts = [
        { id: 1, title: "Tanzanite Royal Pendant", price: "$3,200", img: "INSERT_WP_MEDIA_URL_HERE" },
        { id: 2, title: "Tsavorite Eternity Ring", price: "$4,500", img: "INSERT_WP_MEDIA_URL_HERE" }
    ];

    const grid = document.getElementById('product-grid');
    if(grid) {
        grid.innerHTML = mockProducts.map(p => `
            <div class="product-card">
                <div class="prod-img-wrapper"><img src="${p.img}" class="prod-img"></div>
                <h3 class="prod-name">${p.title}</h3>
                <div class="prod-price">${p.price}</div>
            </div>
        `).join('');
    }
    </script>
    ```
6.  **Neve Settings:**
    - **Hooks:** `neve_before_content` (Action: **Replace**). 
    - **Conditions:** Archive > Product Archive (Shop).
7.  **Publish.**

---

## Summary of the "No-PHP" Workflow
1.  **Styles:** Copied into **Customize > Additional CSS**.
2.  **Images:** Uploaded to **Media Library**, URLs copied into HTML.
3.  **Structure:** Copied into **Neve Custom Layouts** (Header/Footer).
4.  **Logic:** Injected via **Custom Layouts** (Script tags in `wp_footer`).
5.  **Dynamic Content:** JavaScript fetches data and draws HTML into empty `<div>` containers.