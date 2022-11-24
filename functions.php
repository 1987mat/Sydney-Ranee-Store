<?php

function loadScripts() {
  wp_register_style('style', get_template_directory_uri() . '/css/style.css');
  wp_enqueue_style('style');
  wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);
}

add_action('wp_enqueue_scripts', 'loadScripts');

// function remove_admin_bar_links() {
//   global $wp_admin_bar;
//   $wp_admin_bar->remove_menu('view-site');        // Remove the view site link
//   // $wp_admin_bar->remove_menu('site-name');        // Remove the site name menu
// }

// add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );

// Add WooCommerce support
function mytheme_add_woocommerce_support() {
  add_theme_support( 'woocommerce' );
}

add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );


// Add support
add_theme_support('menus');
add_theme_support('post-thumbnails');

register_nav_menus(
  array(
    'top_menu' => 'Top Menu'
  )
);

add_image_size('post_image', 1100, 750, true);

function load_dashicons_front_end() {
  wp_enqueue_style( 'dashicons' );
}

// Enqueue the Dashicons script
add_action( 'wp_enqueue_scripts', 'load_dashicons_front_end' );

add_filter( 'woocommerce_enqueue_styles', '__return_false' );


// Add widget
// register_sidebar(
//   array(
//     'name' => 'Page Sidebar',
//     'id' => 'page-sidebar',
//     'before_title' => '<h4>',
//     'after_title' => '</h4>'
//   )
// );


