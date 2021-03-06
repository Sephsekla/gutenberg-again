<?php
/**
 * Plugin Name: JBR Gutenberg Block
 * Plugin URI: https://joebr.io/
 * Description: Gutenberg Block Development
 * Author: Joe Bailey-Roberts
 * Plugin URI: https://joebr.io/
 * Version: 1.0.0
 * License: None
 * License URI: None
 * 
 * Developed using instructions provided by Catapult Themes (https://github.com/Catapult-Themes/Feature-Block-Gutenberg)
 *
 * @package JBR_Gutenberg_Block
 */
// Exit if accessed directly.
defined('ABSPATH') || exit;


add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_03_enqueue_block_editor_assets' );
function gutenberg_examples_03_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-examples-03',
		plugins_url( 'block/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
	wp_enqueue_style(
		'gutenberg-examples-03-editor',
		plugins_url( 'assets/css/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
}
add_action( 'enqueue_block_assets', 'gutenberg_examples_03_enqueue_block_assets' );
function gutenberg_examples_03_enqueue_block_assets() {
	wp_enqueue_style(
		'gutenberg-examples-03',
		plugins_url( 'assets/css/style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}

function gutenberg_my_block_init() {
    register_meta( 'post', 'test-meta', array(
        'show_in_rest' => true,
        'single' => true
    ) );
}
add_action( 'init', 'gutenberg_my_block_init' );