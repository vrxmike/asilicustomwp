# Migration Plan: Asili Gems Homepage (No PHP/Child Theme)

This plan details how to move the locally developed `index_variant_q.html` to your WordPress environment using Neve Pro and Otter Pro, without touching PHP or creating child themes.

## Phase 1: Asset Preparation (Consolidation)

Since we cannot easily upload the `assets/` folder to the exact relative path WordPress expects without FTP access, we will **inline** the styles and scripts.

1.  **Fonts:** Convert the HTML `<link>` tags for Google Fonts into a CSS `@import` rule.
2.  **CSS:** Combine `assets/css/palette.css`, `assets/css/style.css`, and the `<style>` block from `index_variant_q.html` into one CSS snippet.
3.  **JS:** Combine `assets/js/products.js` and `assets/js/app.js` into one JS snippet.
4.  **HTML:** Extract only the content *inside* the `<body>` tags (excluding the `<script>` tags at the end, which we'll handle separately).

## Phase 2: WordPress Page Creation

1.  Log in to your WordPress Dashboard.
2.  Go to **Pages > Add New**.
3.  Title the page (e.g., "Home New").
4.  **Important:** In the Page Settings (sidebar), look for **Template**. Change it from "Default Template" to **"Neve Canvas"** (or "Page Builder Blank").
    *   *Why?* The provided HTML includes its own Header and Footer. The "Canvas" template strips the default Neve header/footer so they don't overlap.

## Phase 3: Implementation via Otter/Gutenberg

We will use a single **Custom HTML** block to hold the entire structure. This ensures the custom code renders exactly as written without the block editor trying to "fix" it.

1.  In the editor, add a **Custom HTML** block.
2.  Paste the content in this order:

    ```html
    <!-- 1. Fonts & Styles -->
    <style>
        /* Import Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;700&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Fraunces:opsz,wght@9..144,300..900&family=Lora:ital,wght@0,400;1,400&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Mono:wght@700&display=swap');
        
        /* Font Awesome (CDN) */
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        /* PASTE CONTENTS OF assets/css/palette.css HERE */
        
        /* PASTE CONTENTS OF assets/css/style.css HERE */

        /* PASTE CONTENTS OF <style> BLOCK FROM index_variant_q.html HERE */
    </style>

    <!-- 2. Body Content -->
    <!-- PASTE THE HTML BODY CONTENT HERE (Header, Hero, Products, etc.) -->
    <!-- Do NOT include the <body> or <html> tags, just the inner content -->

    <!-- 3. Scripts -->
    <script>
        /* PASTE CONTENTS OF assets/js/products.js HERE */
        
        /* PASTE CONTENTS OF assets/js/app.js HERE */
    </script>
    ```

3.  **Update/Publish** the page.

## Phase 4: Go Live

1.  View the page to ensure everything renders correctly.
2.  Go to **Settings > Reading**.
3.  Under **Your homepage displays**, select **A static page**.
4.  For **Homepage**, select the new page you created ("Home New").
5.  Click **Save Changes**.

## Checklist for Success
- [ ] **Images:** Ensure all image URLs in the HTML are absolute (start with `http` or `https`). The current mock uses Unsplash/Asili links which are fine.
- [ ] **Neve Canvas:** Verify the template is set to Canvas; otherwise, you will see two headers.
- [ ] **Mobile Drawer:** Test the mobile menu drawer on a phone; inline JS sometimes behaves differently if there are conflict errors.
- [ ] **Otter Blocks:** If you want to make sections editable later, you would need to convert the HTML sections into Otter "Section" blocks one by one. For now, the "Custom HTML" block is the fastest deployment method.
