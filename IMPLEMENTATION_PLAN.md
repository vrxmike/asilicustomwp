# Asili Gems - 5-Day Custom Web Store Implementation Plan

## Overview
**Objective:** Transform the current single-page prototype into a fully functional, multi-page e-commerce template using custom HTML, CSS, and Vanilla JavaScript.
**Constraints:** 5 Days, No external frameworks (React/Vue), Maintain "Luxury/Custom" aesthetic.

---

## Tech Stack
- **Frontend:** HTML5, CSS3 (Variables + Flex/Grid), Vanilla JavaScript (ES6+).
- **Data:** `products.json` (or a JS object array) to act as a mock database.
- **State Management:** Browser `localStorage` for the Shopping Cart.

---

## Daily Schedule

### Day 1: Foundation & Modularization
**Focus:** Clean up and prepare for scale.
1.  **File Structure Setup:**
    ```text
    /assets
      /css
        - main.css (Global styles)
        - palette.css (Variables)
      /js
        - app.js (Global logic: Header, Mobile Menu, Cart State)
        - products.js (The data source)
      /images
    ```
2.  **Asset Extraction:** Move styles from `index.html` to CSS files.
3.  **Component Standardization:** Define the exact HTML structure for the `Header` and `Footer` so they can be copied to new pages easily.

### Day 2: The Shop Page (`shop.html`)
**Focus:** Browsing and Filtering.
1.  **Layout:** Create a page with a sticky Sidebar (Filters) and a Main Content area (Grid).
2.  **Dynamic Rendering:** Write a function `renderProducts(data)` that loops through your product list and generates HTML cards.
3.  **Filtering Logic:** Implement event listeners for:
    - Category (Necklaces, Rings, etc.)
    - Gemstone (Ruby, Tanzanite, etc.)
    - Price Sort (Low-High, High-Low)

### Day 3: Product Detail Page (`product.html`)
**Focus:** Conversion and Details.
1.  **Routing (Simple):** Use `window.location.search` to get the `?id=XYZ` from the URL.
2.  **UI Construction:**
    - **Gallery:** Main image with click-to-zoom and a thumbnail strip.
    - **Info Panel:** Title, Price, Description, Accordions for "Details" and "Shipping".
    - **Actions:** "Add to Cart" button with quantity selector.
3.  **Related Products:** Randomly select 3 other items from the same category to display at the bottom.

### Day 4: Cart System & Checkout
**Focus:** Transactional Flow.
1.  **Global Cart Drawer:** 
    - Build a slide-out drawer (reusing your Mobile Menu logic/styles) that appears when the Cart Icon is clicked.
    - Display items with Image, Title, Price, Qty, and Remove button.
    - Calculate Subtotal dynamically.
2.  **State Persistence:** Ensure cart items survive page reloads using `localStorage`.
3.  **Checkout Page (`checkout.html`):**
    - A clean, two-column layout: Form (Left) + Order Summary (Right).
    - Validation for inputs (Email, Address).

### Day 5: Polish & Refinement
**Focus:** The "Luxury" Feel.
1.  **Mobile QA:** Test `shop.html` filters and `product.html` gallery on mobile widths.
2.  **Animations:** Add `fade-in` on scroll and smooth transitions for hover effects.
3.  **Empty States:** Design a nice "Your cart is empty" view.
4.  **Final Code Audit:** Remove unused CSS and console logs.
