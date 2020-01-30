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
 * Register Custom Navigation Walker
 */
function register_navwalker(){
	require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
}
//add_action( 'after_setup_theme', 'register_navwalker' );

/**
 * jQuery 3.4.x support
 */

function jquery_migrate_removal( &$scripts ) {
    if ( !is_admin() ) {
    $scripts->remove('jquery');
    $scripts->add('jquery', false, array('jquery-core'), '1.12.4');
    }
}

add_filter( 'wp_default_scripts', 'jquery_migrate_removal' );

function jquery_update() {
    wp_deregister_script('jquery');
    wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.4.1.min.js', false, null );
    wp_enqueue_script( 'jquery');
    wp_enqueue_script('jquery-migrate', 'https://code.jquery.com/jquery-migrate-3.1.0.js', array('jquery'));
}

function bootstrap_enqueue() {
	wp_enqueue_style( 'fontawesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style( 'bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    wp_enqueue_script( 'popper-js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', array('jquery'));
    wp_enqueue_script( 'bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array('jquery'));
}

add_action( 'wp_enqueue_scripts', 'jquery_update', 11);
add_action( 'wp_enqueue_scripts', 'bootstrap_enqueue', 11);

/**
 * Enqueue styles
 */
function child_enqueue_() {

    wp_enqueue_style( 'anaplan-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ANAPLAN_CHILD_VERSION, 'all' );
    wp_enqueue_script( 'anaplan-astra-js', get_stylesheet_directory_uri()  . '/scripts-min.js', array('jquery'));

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
		wp_enqueue_script( 'anaplan-coveo-js-init', get_stylesheet_directory_uri()  . '/js/min/coveo-init-standalone-min.js',  CHILD_THEME_ANAPLAN_CHILD_VERSION, false);
	}

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_', 15 );

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
    ));
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

function swap_content( $content ) {
    $content = str_replace( "http:", "https:", $content );
    return $content;
}

add_filter('the_content', 'swap_content');

add_filter('the_content', function ($content) {
    //-- Change src/srcset to data attributes.
    $content = str_replace('src="', 'style="opacity:0;" data-src="', $content);
	return str_replace('srcset="', 'data-srcset="', $content);
});