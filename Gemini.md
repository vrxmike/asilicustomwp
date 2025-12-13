# Gemini: Asiligems Development Companion

**Role:** Peer-Programmer | UI/UX Designer | Researcher  
**Project:** Asiligems (Modern Gemstones Online Store)  
**Target Standards:** 2026 Modern Web Design  
**Date:** December 12, 2025

---

## 1. Project Tech Stack & Tools

*   **Core CMS:** WordPress (implied by WooCommerce/Neve)
*   **Theme:** Neve Pro (Focus: Custom Layouts Module)
*   **Builder/Blocks:** Otter Pro, ThemeIsle's Template Cloud
*   **E-Commerce:** WooCommerce, Sparks for WooCommerce
*   **Interactivity:** JavaScript (ES6+), WebGL (Three.js/Babylon.js for 3D elements)
*   **Testing:** LambdaTest
*   **Environment:** Linux

## 2. Development Constraints & Philosophy

*   **NO Child Theme:** All customizations must be handled via the theme's native features (Custom Layouts) or plugins to ensure update safety without a child theme structure.
*   **NO PHP in Custom Pages:** Logic and structure must rely on HTML5, CSS3 (Modern features like Grid/Flexbox/Variables), and Vanilla JavaScript (ES6+).
*   **"All" Custom Pages:** We are bypassing default templates where possible, injecting fully custom designs via Neve's Custom Layouts hooks.

## 3. Architecture: The "No-PHP" Custom Layouts Strategy

Since we are avoiding PHP templates and Child Themes, we will utilize **Neve Pro's Custom Layouts** engine to inject our code.

### The Mechanism
1.  **Hooks:** We will use hooks (e.g., `neve_before_header`, `neve_after_header`, `neve_before_content`, `neve_after_content`, `neve_footer`) to replace or augment default theme areas.
2.  **Conditionals:** We will assign layouts to specific pages (Home, Shop, Single Product, Cart, Checkout) using Neve's conditional logic.
3.  **The Editor:** We will use the WordPress Block Editor (Gutenberg) combined with **Otter Pro** blocks for structure, and the **Custom HTML** block for pure code injection.
4.  **Styling:** Custom CSS will be added either globally in the Customizer or, preferably, within the Custom Layouts themselves (wrapped in `<style>` tags for page-specific styles) or via a custom CSS plugin to keep it organized.
5.  **Interactivity:** JavaScript will be added via `<script>` tags within the Custom Layouts (footer hooks preferred for performance).

## 4. Design Vision: "2026 Standards"

The "Asiligems" aesthetic will be defined by:

*   **Hyper-Realism & Macro Photography:** High-fidelity imagery of gemstones serving as the primary UI elements.
*   **Glassmorphism 2.0:** Evolved frosted glass effects with dynamic light refraction (simulating gemstone properties).
*   **Dark/Lux Mode:** A deep, rich background (charcoal or midnight blue) to make the gem colors pop.
*   **Micro-Interactions:** Subtle animations on hover (glint/sparkle effects) using CSS filters and SVGs.
*   **Typography:** Elegant serif fonts for headings (editorial style) paired with clean, geometric sans-serifs for readability.
*   **Minimalist Commerce:** Hiding complexity. Streamlined "Add to Cart" flows and floating interface elements.

## 5. Implementation Roadmap

### Phase 1: Foundation & Setup
- [ ] Configure Neve Pro: Enable "Custom Layouts" module.
- [ ] Install/Configure Otter Pro & Sparks.
- [ ] Define Global Colors and Typography in Neve Customizer (as a fallback).

### Phase 2: Core Layout Construction (No-PHP)
- [ ] **Global Header:** Build a custom sticky header with transparent background using Custom Layouts (Hook: `neve_before_header`, Replace Header: Yes).
- [ ] **Global Footer:** Design a multi-column footer with newsletter integration (Hook: `neve_before_footer` or `neve_footer`, Replace Footer: Yes).

### Phase 3: Page Specifics
- [ ] **Homepage:** Create a full-screen hero section with WebGL or video background of rotating gems.
- [ ] **Shop/Archive:** Build a custom grid layout using CSS Grid, overriding default WooCommerce styles.
- [ ] **Single Product:** Use Sparks for WooCommerce to enhance product data, but wrap it in a custom HTML structure via Custom Layouts hooks (`woocommerce_before_single_product`, etc.).

### Phase 4: Polish & Performance
- [ ] CSS Optimization (Variables for easy theming).
- [ ] JS Minification.
- [ ] Cross-browser testing via LambdaTest.

---

**How to use this file:**
Refer to this document to keep our design goals and technical constraints aligned. When asking me to generate code, reference the specific section (e.g., "Generate the HTML/CSS for the Header based on Phase 2").
