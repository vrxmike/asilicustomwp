# WordPress & WooCommerce Porting Guide

**Objective:** Convert the custom static HTML/CSS/JS "Asili Gems" site into a fully functional WordPress Theme with WooCommerce support.

**Timing:** This process begins **after** you have completed the 5-Day Static Prototype.

---

## Phase 1: Theme Foundation
Instead of just "uploading files," you must wrap your code in a structure WordPress understands.

1.  **Create Theme Folder:**
    - On your computer, create a folder: `wp-content/themes/asili-gems-theme`.
2.  **Required Files:**
    - `style.css`: Contains the standard WordPress comment block (Theme Name, Author, etc.).
    - `functions.php`: The "brain" of the theme. This is where we will "enqueue" (load) your custom CSS and JS.
    - `index.php`: Fallback template (can be blank or simple text for now).
    - `screenshot.png`: A picture of your design (880x660px) to show in the WP Dashboard.

## Phase 2: Asset Migration
1.  **Move Assets:**
    - Copy your `assets/` folder (created in the 5-Day plan) into the theme folder.
    - *Path:* `themes/asili-gems-theme/assets/css/...`
2.  **Enqueue in `functions.php`:**
    - You cannot simply link CSS in the `<head>`. You must use PHP:
    ```php
    function asili_scripts() {
        wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/style.css');
        wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/app.js', array(), '1.0', true);
    }
    add_action('wp_enqueue_scripts', 'asili_scripts');
    ```

## Phase 3: The "Cut & Paste" (Templates)
WordPress assembles pages like Lego. You will slice your static `index.html` into three parts:

1.  **`header.php`:**
    - Copy everything from `<!DOCTYPE html>` down to the closing `</header>`.
    - Replace the `<head>` contents with `<?php wp_head(); ?>` (Critical for plugins/WooCommerce).
2.  **`footer.php`:**
    - Copy everything from `<footer>` down to `</html>`.
    - Add `<?php wp_footer(); ?>` right before `</body>`.
3.  **`front-page.php` (The Homepage):**
    - Copy the "Middle" of your `index.html` (Hero, USP, etc.).
    - Add `<?php get_header(); ?>` at the very top.
    - Add `<?php get_footer(); ?>` at the very bottom.

## Phase 4: WooCommerce Integration
This is where we replace your static HTML "Shop" and "Product" pages with dynamic WooCommerce templates.

1.  **Declare Support:** In `functions.php`, add `add_theme_support('woocommerce');`.
2.  **The Shop Page (`archive-product.php`):**
    - Copy the standard WooCommerce template to your theme folder: `themes/asili-gems-theme/woocommerce/archive-product.php`.
    - Edit it to match your `shop.html` structure.
    - Keep the "The Loop" (the PHP code that cycles through products) but wrap it in your custom CSS grid classes.
3.  **The Product Page (`single-product.php`):**
    - Copy `themes/asili-gems-theme/woocommerce/single-product.php`.
    - Match it to your `product.html` layout.
    - Replace your static title `<h2>Tanzanite Ring</h2>` with `<?php the_title(); ?>`.
    - Replace static price with `<?php echo $product->get_price_html(); ?>`.

## Phase 5: Uploading to Live Site
1.  **Zip It:** Compress your `asili-gems-theme` folder into a `.zip` file.
2.  **Upload:** Go to WordPress Dashboard > Appearance > Themes > Add New > Upload Theme.
3.  **Activate:** Click "Activate".
4.  **Populate:** Go to Products > Add New in WordPress and enter your real product data (which will now automatically appear in your custom designs).
