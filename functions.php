<?php

function loadScripts() {
  wp_register_style('style', get_template_directory_uri() . '/css/style.css');
  wp_enqueue_style('style');
  wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);
}

add_action('wp_enqueue_scripts', 'loadScripts');

function remove_admin_bar_links() {
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu('view-site');        // Remove the view site link
  // $wp_admin_bar->remove_menu('site-name');        // Remove the site name menu
}

add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );

// Add support
add_theme_support('menus');
add_theme_support('post-thumbnails');

register_nav_menus(
  array(
    'top_menu' => 'Top Menu'
  )
);

add_image_size('post_image', 1100, 750, true);

// Add widget
register_sidebar(
  array(
    'name' => 'Page Sidebar',
    'id' => 'page-sidebar',
    'before_title' => '<h4>',
    'after_title' => '</h4>'
  )
);


