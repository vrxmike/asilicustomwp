### Phase 1: Foundation & Data
1.  **Expand Product Data (`assets/js/products.js`)**:
    *   Currently, there are only 3 products. I will increase this to ~9-12 items to properly demonstrate a grid layout.
    *   Add metadata to each product object for filtering: `category` (Necklaces, Rings, Bracelets, Earrings), `gemstone` (Tanzanite, Tsavorite, Ruby, Sapphire), and `priceValue` (numeric integer for sorting).

2.  **Create `shop.html`**:
    *   Duplicate `index.html` to maintain the header, footer, and styling consistency.
    *   Remove the "Hero Slider" and existing homepage-specific sections.
    *   Add a **Shop Header** (Title, Breadcrumbs).
    *   Create a **Main Layout** with two columns (on desktop):
        *   **Sidebar:** For Filters (Category, Gemstone, Price Range).
        *   **Product Grid:** To display the card layout.

### Phase 2: Logic & Interactivity
3.  **Create `assets/js/shop.js`**:
    *   **Rendering:** A function to dynamically generate HTML for product cards based on the `products` array.
    *   **Filtering:** Logic to listen to sidebar clicks/inputs and update the displayed grid (e.g., "Show only Rings").
    *   **Sorting:** Logic for a "Sort By" dropdown (Price: Low-High, Newest).
    *   **Integration:** Reuse the existing `openModal(index)` function from `app.js` so "Quick View" works immediately.

4.  **Navigation Update**:
    *   Update the "Shop" link in the header navigation of both `index.html` and `shop.html` to point to the new page.

### Phase 3: Polish
5.  **Styling**:
    *   Ensure the product grid is responsive (1 column mobile, 2 tablet, 3 desktop).
    *   Style the sidebar filters to match the `palette.css` design system (clean, minimal, serif fonts).