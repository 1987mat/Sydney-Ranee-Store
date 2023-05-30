<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sydney Raneé Online Store">
  <title>Sydney Ranee` Store</title>
  <?php wp_head();?>
</head>
<body <?php body_class();?>>
  <header class="site_header">
    <div class="header-wrapper">
      <div class="login-search-wrapper">
        <a href="<?php echo site_url('/my-account');?>" aria-label="login" class="login">
          <span class="dashicons dashicons-admin-users"></span>
        </a>
        <span class="dashicons dashicons-search search-icon-btn"></span>
      </div>
      <a href="<?php echo site_url('');?>" class="logo" aria-label="logo"><img src=<?php echo get_template_directory_uri() . '/images/logo.png';?> width="300" height="40" alt="logo"></a>
      <div class="hamburger">
          <div></div>
        </div>
      <div class="nav-container">
        <div class="nav-menu-wrapper">
          <?php 
            wp_nav_menu( array( 'theme_location' => 'header' ) );
          ?>
          <div class="social-icons-nav">
            <a href="https://www.instagram.com/sydney.ranee" target="_blank" aria-label="instagram"><span class="dashicons dashicons-instagram"></span></a>
            <a href="https://open.spotify.com/artist/1MvIqIr5okw4M1GO51nzdH" target="_blank" aria-label="spotify"><span class="dashicons dashicons-spotify"></span></a>
            <a href="https://www.amazon.com/s?k=Sydney+Ranee%27&i=digital-music&qid=1566324805&search-type=ss&ref=sr_pg_1" target="_blank" aria-label="amazon"><span class="dashicons dashicons-amazon"></span></a>
            <a href="https://www.youtube.com/user/SydRanee" target="_blank" aria-label="youtube"><span class="dashicons dashicons-youtube"></span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
  
