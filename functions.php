<?php

function loadScripts() {
  wp_register_style('style', get_template_directory_uri() . '/css/style.css');
  wp_enqueue_style('style');
  wp_enqueue_style( 'dashicons' );
  wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);

   // Make url relative for AJAX requests
   wp_localize_script('main-js', 'siteData', array(
    'root_url' => get_site_url(),
    'nonce' => wp_create_nonce('wp_rest')
  ));
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

function register_my_menus() {
  register_nav_menus(
    array(
      'header' => __( 'Menu Header' )
    )
  );
}

add_action( 'init', 'register_my_menus' );

add_image_size('post_image', 1100, 750, true);

// Override Woocommerce CSS
add_filter( 'woocommerce_enqueue_styles', '__return_false' );

function add_script_to_footer(){
  ?>
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

// jQuery plus & minus button for quantity input
add_action( 'wp_footer', 'add_script_to_footer');

function add_search_modal() {
	echo 
  "<div class='search-wrapper-hidden'>
    <div class='search-input-field'>
      <span class='dashicons dashicons-search placeholder-search-icon'></span>
      <span class='close-icon'>&#10006;</span>
      <input type='text' placeholder='Search' class='search-input'>
    </div>
    <div class='search-results'>
    </div>
  </div>";
}

// Add a hidden search modal 
add_action( 'wp_footer', 'add_search_modal' );

function register_search() {
  register_rest_route('store/v1', '/search', [
    'methods'  => WP_REST_SERVER::READABLE,
    'callback' => 'search_results'
  ]);
}

function search_results( $data ) {
  $mainQuery = new WP_Query(array(
    'posts_per_page' => 10,
    'post_type' => 'product',
    'post_status' => 'publish',
    's' => sanitize_text_field($data['term'])
  ));

  $results = array();

  while ($mainQuery->have_posts()) {
    $mainQuery->the_post();

    array_push($results, array(
      'title' => get_the_title(),
      'url' => get_the_permalink(),
      'image' => get_the_post_thumbnail_url(0, 'landscape'),
      'price' => get_post_meta( get_the_ID(), '_regular_price', true)
    ));
  }

  return $results;
}

add_action('rest_api_init', 'register_search');


function woocommerce_add_to_cart( $fragments ) {
	global $woocommerce;

	ob_start();

	?>
  <span class="product-count"><?php echo $woocommerce->cart->cart_contents_count;?></span>
	<?php
	$fragments['.product-count'] = ob_get_clean();
	return $fragments;
}

// AJAX update cart product count
add_filter( 'woocommerce_add_to_cart_fragments', 'woocommerce_add_to_cart' );
