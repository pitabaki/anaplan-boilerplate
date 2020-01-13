<?php
/**
 * Anaplan Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Anaplan Child
 * @since 1.0.1
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ANAPLAN_CHILD_VERSION', '1.0.1' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'anaplan-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ANAPLAN_CHILD_VERSION, 'all' );

}

function child_event_date_script() {
	if ( $_SERVER['REQUEST_URI'] == '/events/' ) {
		wp_enqueue_script('anaplan-astra-grid-dates', get_stylesheet_directory_uri() . '/js/event-date-print.js', CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
	}

	if ( $_SERVER['REQUEST_URI'] == '/events/real-time-model-building/denmark/' ) {
		wp_enqueue_script('anaplan-staging-redirect', get_stylesheet_directory_uri() . '/js/staging-redirects.js', CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
	}
}

function coveo_support() {

	if ( is_page_template('page_search.php') != false ) {
		wp_enqueue_style( 'anaplan-coveo-full', './wp-content/uploads/coveo-search/css/CoveoFullSearch.css', array('astra-theme-css'), CHILD_THEME_ANAPLAN_CHILD_VERSION, 'all' );
		wp_enqueue_style( 'anaplan-coveo-ext', './wp-content/uploads/coveo-search/css/coveoextension.css', array('astra-theme-css'), CHILD_THEME_ANAPLAN_CHILD_VERSION, 'all' );
		wp_enqueue_script( 'anaplan-coveo-js-lazy', './wp-content/uploads/coveo-search/js/CoveoJsSearch.Lazy.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
		wp_enqueue_script( 'anaplan-coveo-js-ext', './wp-content/uploads/coveo-search/js/coveo.extension.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
		wp_enqueue_script( 'anaplan-coveo-js-templates', './wp-content/uploads/coveo-search/js/templates/templates.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
		wp_enqueue_script( 'anaplan-coveo-js-init', get_stylesheet_directory_uri()  . '/js/coveo-init.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
		wp_dequeue_style( 'tribe_customizer_css' );
	} else {
		//wp_enqueue_style( 'anaplan-coveo-test', 'https://static.cloud.coveo.com/searchui/v1.2537/css/CoveoFullSearchNewDesign.css', array('astra-theme-css'), CHILD_THEME_ANAPLAN_CHILD_VERSION, 'all' );
		//wp_enqueue_script( 'anaplan-coveo-js-searchbox', 'https://static.cloud.coveo.com/searchui/v1.2537/js/CoveoJsSearch.Searchbox.min.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
		wp_enqueue_script( 'anaplan-coveo-js-init', get_stylesheet_directory_uri()  . '/js/min/coveo-init-standalone-min.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
	}

}

function honey_pot() {
	wp_enqueue_script( 'anaplan-honeypot', get_stylesheet_directory_uri()  . '/js/min/sweet-honey-min.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
}

//add_action( 'wp_enqueue_scripts', 'honey_pot', 15);

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );

add_action( 'wp_enqueue_scripts', 'coveo_support', 15);

add_action( 'wp_enqueue_scripts', 'child_event_date_script', 15);


/**
 * Add Custom Headers
 */

function anaplan_send_headers( $header ) {
  header( 'X-Frame-Options: allow-from https://thebarn.anaplan.com/' );
  header( 'X-Xss-Protection: 1; mode=block' );
  header( 'X-Content-Type-Options: nosniff' );
  header( 'Content-Security-Policy: upgrade-insecure-requests' );
  header( 'Strict-Transport-Security: max-age=31536000' );
  header( 'Referrer-Policy: strict-origin-when-cross-origin');
  header( 'Access-Control-Allow-Origin: *');
  header( 'Access-Control-Allow-Credentials: true' );
}

add_filter( 'send_headers', 'anaplan_send_headers' );

/** adding except support to pages - adam **/
add_post_type_support( 'page', 'excerpt' );

function position_update($content) {
    if ( strpos( $content, 'itemprop="' ) == TRUE ) {
        $content = str_replace( ' property="v:title"', '', $content );
        $content = str_replace( ' itemscope=""', '', $content );
        $content = str_replace( 'itemprop="', 'property="', $content );
        $content = str_replace( 'position="', 'property="position" content="', $content );
        return $content;
    } else {
        return $content;
    }
}

function position_update_test($content) {
        $content = str_replace( ' property="v:title"', '', $content );
        $content = str_replace( ' itemscope=""', '', $content );
        $content = str_replace( 'itemprop="', 'property="', $content );
        $content = str_replace( 'position="', 'property="position" content="', $content );
        return $content;

}

add_filter( 'the_content', 'position_update' );
//add_filter( 'the_content', 'position_update_test' );

function custom_excerpt_length( $length ) {
   return 40;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

//custom widget holder for marketo form
function marketo_form() {
    register_sidebar( array(
        'name' => __( 'Marketo-form', 'marketo_form' ),
        'id' => 'marketo-form',
        'before_widget' => '<aside class="widget widget_search">',
        'after_widget' => '</aside>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ) );
}
add_action( 'widgets_init', 'marketo_form' );

//custom widget holder for marketo form
function single_blog() {
    register_sidebar( array(
        'name' => __( 'Single-blog sidebar', 'single_blog_sidebar' ),
        'id' => 'single_blog_sidebar',
        'before_widget' => '<aside class="widget widget_search">',
        'after_widget' => '</aside>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ) );
}
add_action( 'widgets_init', 'single_blog' );

function remove_login_redirect () {
    $requ = untrailingslashit($_SERVER['REQUEST_URI']);
    if ( site_url('login','relative') === untrailingslashit( $_SERVER['REQUEST_URI'] ) ){
      remove_action( 'template_redirect', 'wp_redirect_admin_locations', 1000 );
    }
}

add_action( 'template_redirect', 'remove_login_redirect' );