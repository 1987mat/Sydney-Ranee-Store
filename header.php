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
      <a href="<?php echo site_url('');?>"><img src=<?php echo get_template_directory_uri() . '/images/logo.png';?> class="logo"></a>
      <div class="nav-container">
        <div class="nav-menu-wrapper">
          <?php 
            wp_nav_menu( array( 'theme_location' => 'header' ) );
          ?>
        </div>
        <span class="dashicons dashicons-search search-icon-btn"></span>
        <a href="<?php echo site_url('/cart');?>" class="cart-link"><span class="dashicons dashicons-cart"></span></a>
        <div class="hamburger">
          <div></div>
        </div>
      </div>
    </div>
  </header>
  
