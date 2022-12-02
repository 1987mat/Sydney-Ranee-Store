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
      <img src=<?php echo get_template_directory_uri() . '/images/logo.png';?> class="logo">
      <div class="header-nav_search-wrapper">
        <?php 
          wp_nav_menu( array( 'theme_location' => 'header' ) );
        ?>
        <span class="dashicons dashicons-search"></span>
      </div>
    </div>
  </header>
  
