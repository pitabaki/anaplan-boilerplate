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
	$server_uri = $_SERVER['REQUEST_URI'];
	function hreflang($uri) {
		echo "<link rel=\"alternate\" href=\"https://www.anaplan.com" . $uri . "\" hreflang=\"x-default\">\n" .
		"<link rel=\"alternate\" href=\"https://www.anaplan.com" . $uri . "\" hreflang=\"en\">\n" .
		"<link rel=\"alternate\" href=\"https://www.anaplan.com/de" . $uri . "\" hreflang=\"de-DE\">\n" .
		"<link rel=\"alternate\" href=\"https://www.anaplan.com/ru" . $uri . "\" hreflang=\"ru-RU\">\n" .
		"<link rel=\"alternate\" href=\"https://www.anaplan.com/fr" . $uri . "\" hreflang=\"fr-FR\">\n" .
        "<link rel=\"alternate\" href=\"https://www.anaplan.com/jp" . $uri . "\" hreflang=\"ja-JP\">\n";
	}
	hreflang($server_uri);
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
		<div class="anaplan-navbar">
			<div class="logo-nav-button">
				<div class="logo">
					<?php the_custom_logo(); ?>
				</div>
				<div id="nav-button" class="nav-button">
					<img src="/wp-content/themes/astra-child/images/hamburger.svg" alt="Site Navigation"/>
				</div>
			</div>
			<div class="search-login">
				<div class="search">
					<form class="search-form" action="https://www.anaplan.com/" method="get">
						<span class="search-text-wrap">
							<label for="s" class="screen-reader-text sr-only"></label>
							<input name="s" class="search-field" type="text" autocomplete="off" value="" placeholder="">
						</span>
					</form>
				</div>
				<a href="#" class="login">
					<img src="/wp-content/themes/astra-child/images/login.svg" alt="login">
					Log-in
				</a>
			</div>
		</div>
		<nav class="anaplan-nav" id="anaplan-nav">
			<?php
				wp_nav_menu( array(
					'menu'			 =>	'Main Nav',
					'menu_id'        => 'primary-menu',
					'menu_class'     => 'navbar-nav',
				));
			?>
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
	<script>
    $("#nav-button").click(function () {
        if ($("#anaplan-nav").first().is(":hidden")) {
            $("#anaplan-nav").slideDown("fast");
        } else {
            $("#anaplan-nav").slideUp("fast");
        }
	});
	$('.drop-down-trigger').click(function (e) {
		e.preventDefault();
		console.log();
		if ( $(this).find('.sub-menu').first().is(":hidden") ) {
			$(this).find('.sub-menu').slideDown("fast");
		} else {
			$(this).find('.sub-menu').slideUp("fast");
		}
	});
</script>