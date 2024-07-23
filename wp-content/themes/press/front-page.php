<?php get_header(); ?>

<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Convertimos tus historias en narrativa audiovisual</h1>
      <p class="py-6">
        Descubre lo que te hace único
      </p>
      <button class="btn btn-primary">AGENDA</button>
    </div>
  </div>
</div>

<!--End Hero -->

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

<?php get_footer();?>
