<?php
/**
 * The header for Astra Theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */ 
require 'be_ixf_client.php';
use BrightEdge\BEIXFClient;

//IXF: the following array and constructor must be placed before any HTML is written to the page.
$be_ixf_config = array(
    BEIXFClient::$CAPSULE_MODE_CONFIG => BEIXFClient::$REMOTE_PROD_CAPSULE_MODE,
    BEIXFClient::$API_ENDPOINT_CONFIG => "https://ixf2-api.bc0a.com",
    BEIXFClient::$ACCOUNT_ID_CONFIG => "f00000000098914",   
    
	// IXF: By default, all URL parameters are ignored. If you have URL parameters that add value to
	// page content.  Add them to this config value, separated by the pipe character (|).
    BEIXFClient::$WHITELIST_PARAMETER_LIST_CONFIG => "ixf",

);
$be_ixf = new BEIXFClient($be_ixf_config);
?><!DOCTYPE html>
<?php astra_html_before(); ?>
<html <?php language_attributes(); ?>>
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQ89NPK');</script>
<!-- End Google Tag Manager -->


<?php astra_head_top(); ?>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="article:published_time" content="<?php echo get_the_date('c'); ?>" />
<meta property="article:modified_time" content="<?php the_modified_date('c'); ?>" />
<meta property="og:published_time" content="<?php echo get_the_date('c'); ?>" />
<meta property="og:modified_time" content="<?php the_modified_date('c'); ?>" />
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php
	astra_head_bottom();
	wp_head(); 
	print $be_ixf->getHeadOpen(); 
?>


</head>

<body <?php astra_schema_body(); ?> <?php body_class(); ?>>

<?php 
	print $be_ixf->getBodyOpen(); 
	print $be_ixf->close(); 
	astra_body_top();
?>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php echo esc_html( astra_default_strings( 'string-header-skip-link', false ) ); ?></a>

	<?php astra_header_before(); ?>

	<?php //astra_header(); ?>

	<header id="masthead" class="site-header">
		<nav class="navbar fixed-top navbar-expand-lg navbar-light">
			<div class="navbar-container">
				<div class="navbar-container-50 navbar-container--left">
					<?php the_custom_logo(); ?>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
						<?php
						wp_nav_menu( array(
							'menu'			 =>	'Main Nav',
							'menu_id'        => 'primary-menu',
							'menu_class'     => 'navbar-nav',
						));
						?>
					</div>
				</div>
				<div class="navbar-container-50 navbar-container--right">
					<?php get_search_form();?>
					<div class="login-container"><i></i><a href="">Log-in</a></div>
				</div>
			</div>
		</nav>
	</header><!-- #masthead -->

	<?php astra_header_after(); ?>

	<?php astra_content_before(); ?>

	<div id="content" class="site-content">

		<div class="ast-container">

		<?php astra_content_top(); ?>
	<script type="text/javascript">
		var currentURL = window.location.href;
		if ( currentURL.indexOf('/jp/') !== -1 || currentURL.indexOf('/fr/') !== -1  || currentURL.indexOf('/de/') !== -1 ) {
			var searchSelect = document.getElementsByClassName("search-above-header");
			searchSelect[0].classList.add("sl_hide");
			searchSelect[0].id = "global-search-bar";
			searchSelect[0].style.display = "none";
		}
	</script>