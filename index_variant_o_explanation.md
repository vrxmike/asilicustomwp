### Structure, Logic, and Layout of `index_variant_o.html`

The `index_variant_o.html` file represents a new variation of the Asili Gems landing page. It is constructed by taking the base structure of the original `index.html` and integrating the specific "Hero Section" design from `index_variant_n.html`.

Here is a breakdown of its components:

#### 1. Global Structure & Metadata
*   **HTML5 Boilerplate:** Standard `<!DOCTYPE html>` structure with `lang="en"`.
*   **Head:**
    *   **Meta Tags:** Viewport settings for responsiveness (`width=device-width, initial-scale=1.0, ...`).
    *   **Fonts:** Preconnects to Google Fonts and loads a suite of typefaces including 'Archivo', 'Bodoni Moda', 'Fraunces', 'Lora', 'Outfit', 'Playfair Display', and 'Space Mono'.
    *   **Icons:** Loads Font Awesome 6.4.0.
    *   **CSS:** Links to `assets/css/palette.css` (variables) and `assets/css/style.css` (base styles).
    *   **Internal Styles (`<style>`):** Contains variant-specific overrides.

#### 2. Internal Styles (Variant Overrides)
The `<style>` block contains the critical CSS logic for this variant:
*   **Header:** Styling for the transparent/scrolled header states.
*   **Hero Slider (Imported from Variant N):**
    *   **`padding-top: 0`:** The slider now sits behind the header (absolute positioning), utilizing the full viewport height (`100vh`).
    *   **Centered Content:** The `.slide-content` is positioned absolute, centered horizontally (`left: 50%`, `transform: translateX(-50%)`), and pinned to the bottom (`bottom: 80px`).
    *   **Typography:** The `.hero-title` uses 'Bodoni Moda' with white text, and `.hero-slogan-top` uses 'Lora', also white.
    *   **CTA Button:** A "Ghost" button style—transparent background with a white border and text (`--c-text-on-dark`), rounded corners (`50px`), and a hover effect that fills it white.
    *   **Navigation Dots:** Left-aligned (`left: 20px`) and positioned `20px` from the bottom.
    *   **Mobile Responsiveness:** A media query (`@media (max-width: 768px)`) adjusts font sizes, keeps the content centered, and maintains the button styling.

#### 3. Body Content Layout

*   **Header (`<header>`):**
    *   **Top Bar:** Utility links (Concierge, Boutiques, Account).
    *   **Main Bar:** Logo (SVG), Navigation (Hamburger menu, Search, Cart).
    *   **Navigation:** Desktop navigation links (Home, Shop, Collections, etc.).

*   **Mobile Drawer:** An off-canvas menu for mobile users.

*   **Hero Section (`<section class="hero-slider">`):**
    *   **Source:** This is the specific part pulled from `index_variant_n.html`.
    *   **Slides:** Three slides with background images.
    *   **Content:** Each slide contains the slogan "The Asili Collection", a headline, and the "Explore The Collection" CTA button.
    *   **Behavior:** Logic for fading slides in/out is handled by `assets/js/app.js` (referenced at the bottom).

*   **Product Section (`<section id="products">`):**
    *   **Grid:** A 3-column grid (`.grid-3`) displaying featured products.
    *   **Cards:** Each product card shows an image, category, name, and a "Quick View" button (which triggers a modal).

*   **Offer Section:** A split layout highlighting a limited "Orelia Jewellery Set" offer.

*   **Testimonials:** A centered testimonial block.

*   **Newsletter:** A subscription form section.

*   **Footer:** Standard footer with links (Brand, Shop, Customer Care), social icons, and copyright info.

*   **Modal:** A hidden product detail modal (`#productModal`) that appears when "Quick View" is clicked.

*   **Scripts:** Loads `assets/js/products.js` (product data) and `assets/js/app.js` (slider, modal, and drawer logic).

### Logic Flow
1.  **Page Load:** Browser renders the full-screen hero slider behind the transparent header.
2.  **Interaction:** Users can scroll down to see products, offers, and footer.
3.  **Hero Slider:** JavaScript cycles through the background images while the centered text overlays remain consistent in style but change content per slide.
4.  **Responsiveness:** On mobile, the grid collapses to a single column, and the hero content resizes but remains centered and pinned 80px from the bottom.
