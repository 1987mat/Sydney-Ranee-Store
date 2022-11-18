<?php

function loadScripts() {
  wp_register_style('style', get_template_directory_uri() . '/css/style.css');
  wp_enqueue_style('style');
  wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);
}

add_action('wp_enqueue_scripts', 'loadScripts');