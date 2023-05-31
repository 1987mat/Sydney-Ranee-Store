<?php get_header(); ?>

<h1>GET IN TOUCH</h1>

<div class="contact-container">

  <?php
    the_content();
  ?>

  <div class="image-wrapper">
    <img src=<?php echo get_template_directory_uri() . '/images/14.jpg';?> alt="contact-photo">
  </div>

</div>

<?php
get_footer();
?>