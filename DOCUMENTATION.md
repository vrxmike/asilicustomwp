# Asili Gems - Homepage Documentation

## Overview
This document provides a technical overview of the `index_variant_i.html` file, which represents the enhanced homepage for the Asili Gems e-commerce website. The page features a modern, high-end design with a focus on visual storytelling, interactivity, and mobile responsiveness.

## File Structure

The HTML is structured semantically into the following main sections:

1.  **`<head>` Configuration:**
    *   Includes meta tags for responsive design.
    *   Imports Google Fonts (Bodoni Moda, Fraunces, Lora, Outfit, Space Mono).
    *   Imports Font Awesome for icons.
    *   Contains the internal CSS within `<style>` tags.

2.  **Header (`header.header-wrapper`):**
    *   **Top Bar:** Utility links and sustainability messaging. Hides on scroll.
    *   **Main Bar:** Contains the Navigation Drawer toggle (mobile), Search/Wishlist icons, the **Brand Logo** (Inline SVG), and Cart.
    *   **Navigation:** Desktop-only horizontal menu.

3.  **Mobile Drawer (`div.mobile-drawer`):**
    *   An off-canvas menu for mobile devices.
    *   Features a large typography navigation, search bar, footer links, and social icons.

4.  **Hero Section (`header.hero-section`):**
    *   **Carousel:** A background image slider cycling through 3 images/SVGs with a "Ken Burns" zoom effect.
    *   **Glass Card:** A central content area with a frosted glass effect (`backdrop-filter`) containing the main headline and CTA.

5.  **USP Section (`section.usp-section`):**
    *   A 3-column grid highlighting key value propositions (Global Shipping, Conflict-Free, Certified Authentic) with icons.

6.  **Products Section (`section#products`):**
    *   Displays a grid of curated products.
    *   Each product card features a hover effect that reveals a "Quick View" button.

7.  **Offer Section (`section.offer-section`):**
    *   A split layout (50/50 text and image) promoting a specific collection or limited-time offer.

8.  **Testimonials (`section.testimonials-section`):**
    *   A centered layout displaying social proof, star ratings, and user details.

9.  **Promo Banner (`section.promo-banner`):**
    *   A full-width parallax-style banner with an overlay for special discount codes.

10. **Footer (`footer`):**
    *   **Main Grid:** A 3-column layout dividing links into "The Brand", "Shop", and "Customer Care".
    *   **Bottom Row:** Contains centered social media icons and the copyright notice.

11. **Product Modal (`div.modal-backdrop`):**
    *   A hidden popup window for "Quick View" functionality.
    *   Includes product image, title, price, description, and "Add to Cart" controls.

## CSS Architecture

The styling relies heavily on CSS Variables (Custom Properties) defined in `:root` for consistency and easy theming.

### Key Variables
*   **Colors:**
    *   `--c-primary`: Dark Green (#006644) - Used for primary actions and accents.
    *   `--c-secondary`: Gold (#D4AF37) - Used for luxury accents.
    *   `--c-bg-page`: Off-white (#F4F6F5) - Main background.
    *   `--c-bg-dark`: Very Dark Green/Black (#0A140F) - Footer and Drawer background.
*   **Typography:**
    *   `--f-hero`: 'Bodoni Moda' (Serif) - Used for large headlines.
    *   `--f-heading`: 'Fraunces' (Serif) - Used for section titles.
    *   `--f-body`: 'Lora' (Serif) - Used for body text.
    *   `--f-ui`: 'Outfit' (Sans-serif) - Used for UI elements like buttons and navigation.

### Design Patterns
*   **Glassmorphism:** Used in the Hero content card (`background: rgba(...); backdrop-filter: blur(...)`).
*   **Grid Layouts:** Extensive use of `display: grid` for the USP, Offer, Products, and Footer sections.
*   **Responsive Design:** Media queries (`@media (max-width: 768px)`) handle the transition from multi-column desktop layouts to single-column mobile layouts.

## JavaScript Functionality

The `index_variant_i.html` file includes inline scripts to handle user interactions:

1.  **Header Scroll Effect:**
    *   Detects `window.scrollY`.
    *   Adds/removes the `.scrolled` class to the header to shrink the logo and hide the top bar.

2.  **Hero Carousel:**
    *   Automatically cycles through `.hero-slide` elements every 6 seconds.
    *   Toggles the `.active` class to trigger CSS transitions (opacity and transform).

3.  **Product Modal:**
    *   `openModal(index)`: Populates the modal with data from a JavaScript object array (`products`) corresponding to the clicked item and displays the modal.
    *   `closeModal()`: Hides the modal and resets the body scroll.
    *   `updateQty(change)`: Handles the quantity counter logic within the modal.

4.  **Mobile Drawer:**
    *   `toggleDrawer()`: Toggles the `.active` class on the drawer and handles body scroll locking.

## External Assets

*   **Images:** Sourced from `asiligems.com` and `unsplash.com`.
*   **Fonts:** Hosted by Google Fonts.
*   **Icons:** Font Awesome 6.4.0 (CDN).

---
*Documentation generated for Asili Gems - Dec 2025*
