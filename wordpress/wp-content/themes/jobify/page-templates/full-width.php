<?php
/**
 * Template Name: Layout: Full Width
 *
 * @package Jobify
 * @since Jobify 1.5.0
 */

get_header(); ?>

    <?php while ( have_posts() ) : the_post(); ?>

    <header class="page-header">
        <h2 class="page-title"><?php the_title(); ?></h2>
    </header>

    <div id="primary" class="content-area container" role="main">
        <?php if ( jobify()->get( 'woocommerce' ) ) : ?>
            <?php wc_print_notices(); ?>
        <?php endif; ?>

        <?php get_template_part( 'content', 'page' ); ?>
        <?php do_action( 'jobify_loop_after' ); ?>
        <?php comments_template(); ?>
    </div><!-- #primary -->

    <?php endwhile; ?>

<?php get_footer(); ?>
