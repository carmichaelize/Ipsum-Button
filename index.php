<?php
/*
	Plugin Name: Ipsum Button
	Plugin URI: http://www.carmichaelize.co.uk/
	Description: Adds a Lorem Ipsum generator button to the Wordpress text editor.
	Author: Scott Carmichael
	Version: 1.0
	Author URI: http://www.scarmichael.co.uk
	Licence: Dual Licensed under GPL & MIT
	Licence URI: GPL(http://www.gnu.org/licenses/gpl.html) / MIT (http://www.opensource.org/licenses/mit-license.php)

	Copyright 2014 Scott Carmichael
*/

define( "IPSUM_URL", plugins_url( '', __FILE__ ) );

class Ipsum_button {

	public function add_filters(){
		add_filter( "mce_external_plugins", array( &$this, "ipsum_add_button" ) );
	    add_filter( 'mce_buttons', array( &$this, "ipsum_register_button" ) );
	}

	public function ipsum_add_button( $plugin_array ){
		$plugin_array['ipsum'] = IPSUM_URL . '/script.js';
	    return $plugin_array;
	}

	public function ipsum_register_button( $button ) {
	    array_push( $button, 'lorem' );
	    return $button;
	}

	public function __construct(){

		//Init
		add_action( 'init', array(&$this, 'add_filters' ) );

		//Button Style
		wp_register_style( 'ipsum-button', IPSUM_URL . '/style.css' );
		wp_enqueue_style( 'ipsum-button' );

	}

}

new Ipsum_button();

?>