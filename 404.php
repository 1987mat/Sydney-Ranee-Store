<?php 
  get_header();
?>
<main>
  <div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			<div class="page-wrapper">
				<div class="page-content">
					<h2><?php _e( "Sorry! We can't find the page.", "sydneyraneestore" ); ?></h2>
          <h3>Go back to <a href="<?php echo site_url('');?>" aria-label="homepage">homepage</a>.</h3>
				</div>
			</div>
      <img src=<?php echo get_template_directory_uri() . '/images/404.jpg';?> alt="404">
		</div>
	</div>
</main>
<?php
get_footer();