<?php

add_action('wp_enqueue_scripts', 'add_assets');

function add_assets() {
    wp_enqueue_style('press-style', get_stylesheet_uri());
    wp_enqueue_style('tailwind-style', get_template_directory_uri().'/src/output.css');
    wp_enqueue_style('custom-styles', get_template_directory_uri().'/src/custom.css');

    wp_enqueue_script('press-script', get_template_directory_uri().'/js/script.js', array(), false, true);
}

function menu_press() {
    register_nav_menus(
        array(
            'header' =>__('Header menu')
        )
    );
}

add_action( 'init', 'menu_press');