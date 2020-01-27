<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

?>
			<?php astra_content_bottom(); ?>

			</div> <!-- ast-container -->

		</div><!-- #content -->
		<div class="be-ix-link-block"><!--Link Equity Target Div--></div>
		<?php astra_content_after(); ?>

		<?php astra_footer_before(); ?>

		<?php //astra_footer(); ?>

		<footer id="site-footer">
			<div class="container">
				<div class="row">
					<?php
					wp_nav_menu( array(
						'menu'			 =>	'Footer Menu',
						'menu_id'        => 'footer-nav',
						'menu_class'     => 'footer-nav',
					));
					?>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="social-container">
							<h4>Social</h4>
							<ul>
								<li>
									<a class="social-media-icon" href="https://www.linkedin.com/company/658814"><i class="fab fa-linkedin-in"></i></a>
								</li>
								<li>
									<a class="social-media-icon" href="https://www.facebook.com/anaplan/"><i class="fab fa-facebook-f"></i></a>
								</li>
								<li>
									<a class="social-media-icon" href="https://www.twitter.com/anaplan"><i class="fab fa-twitter"></i></a>
								</li>
								<li>
									<a class="social-media-icon" href="https://www.instagram.com/anaplanning/"><i class="fab fa-instagram"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>

		<div id="copyright" class="site-copyright" role="contentinfo">
			<div class="container">
				<div class="row">
					<div class="col-md-6 site-info site-info--left">
						<p>© 2020 Anaplan, Inc. All rights reserved.</p>
					</div>
					<div class="col-md-6 site-info site-info--right">
						<a href="https://www.anaplan.com/privacy-policy/">Privacy policy</a> <span class="sep"> | </span>
						<a href="https://www.anaplan.com/cookie-policy/">Cookie policy</a><span class="sep"> | </span>
						<a href="https://www.anaplan.com/terms-of-use/">Terms of service</a>
					</div>
				</div>
			</div>
		</div>

		<?php astra_footer_after(); ?>

	</div><!-- #page -->

	<?php astra_body_bottom(); ?>

	<?php wp_footer(); ?>
	<?php
		$server_uri = $_SERVER['REQUEST_URI'];
		if ( $server_uri !== "/" ) {
			echo "<img style='display:flex;' height='0' width='0' alt='' src='https://pixel.mintigo.com/mintigo_pixel.png?pixel_cid=c270624198'/>";
		}
	?>
	</body>
</html>
