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
      <?php 
        wp_nav_menu(
          array(
            'theme-location' => 'top-menu',
          )
        );
      ?>
    </div>
  </header>
  
