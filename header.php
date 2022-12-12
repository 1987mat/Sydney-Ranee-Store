<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sydney Ranee` Store</title>
  <?php wp_head();?>
</head>
<body <?php body_class();?>>
  <header>
    <div class="header-wrapper">
      <a href="<?php echo site_url('');?>" class="logo"><img src=<?php echo get_template_directory_uri() . '/images/logo.png';?> ></a>
      <div class="nav-container">
        <div class="nav-menu-wrapper">
          <?php 
            wp_nav_menu( array( 'theme_location' => 'header' ) );
          ?>
        </div>
        <span class="dashicons dashicons-search search-icon-btn"></span>
        <!-- Get cart product quantity -->
        <?php 
          global $woocommerce;
          $productCount = WC()->cart->get_cart_contents_count();
        ?>
        <a href="<?php echo site_url('/cart');?>" class="cart-icon-link">
          <div class="cart-icon-wrapper">
            <span class="dashicons dashicons-cart"></span>
            <span class="product-count"><?php echo $productCount;?></span>
          </div>
        </a>
        <div class="hamburger">
          <div></div>
        </div>
      </div>
    </div>
  </header>
  
