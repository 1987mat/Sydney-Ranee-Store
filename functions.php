<?php

function loadScripts() {
  wp_register_style('style', get_template_directory_uri() . '/css/style.css');
  wp_enqueue_style('style');
  wp_enqueue_style( 'dashicons' );
  wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);
}

add_action('wp_enqueue_scripts', 'loadScripts');

function mytheme_add_woocommerce_support() {
  add_theme_support( 'woocommerce' );
}

// Add WooCommerce support
add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );

// Add nav menu & thumbnails
add_theme_support('menus');
add_theme_support('post-thumbnails');

register_nav_menus(
  array(
    'top_menu' => 'Top Menu'
  )
);

add_image_size('post_image', 1100, 750, true);

// Override Woocommerce CSS
add_filter( 'woocommerce_enqueue_styles', '__return_false' );

function add_script_to_footer(){
  if(!is_admin()) { ?>
  <script>
    jQuery(document).ready(function($){
      $(document).on('click', '.plus', function(e) { 
        $input = $(this).prev('input.qty');
        var val = parseInt($input.val());
        var step = $input.attr('step');
        step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
        $input.val( val + step ).change();
        $('#update-cart-btn').addClass('active');
      });

      $(document).on('click', '.minus',  
        function(e) {
        $input = $(this).next('input.qty');
        var val = parseInt($input.val());
        var step = $input.attr('step');
        step = 'undefined' !== typeof(step) ? parseInt(step) : 1;
        if (val > 0) {
          $input.val( val - step ).change();
          $('#update-cart-btn').addClass('active');
        }
      });
    });
  </script>
<?php
  }
}

// jQuery plus & minus button for quantity input
add_action( 'wp_footer', 'add_script_to_footer');