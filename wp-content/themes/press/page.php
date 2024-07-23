<?php get_header(); ?>


<main>
    <div class="row">
			<div class="col-md-12">
		
			<?php
			//start the loop.
			while (have_posts() ) : the_post();
			?>

			<article <?php post_class(); ?>>
			
				<div class="entry-content">
					<?php the_content(); ?>
				</div>
			</article>

			<?php
			//End of the loop.
			endwhile;
			?>

			</div>
	
		</div>

</main>


<?php get_footer(); ?>