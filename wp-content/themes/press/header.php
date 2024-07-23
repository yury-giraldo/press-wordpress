<?php 
/* Contains Header*/

?> <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Press</title>

        <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>> 

    <header class="sm:mb-2.5 md:mx-auto md:h-40 md:justify-center navbar bg-transparent fixed z-10">
        <div class="sm:mr-3.5 md:w-1/5 justify-end navbar-start">
            <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <?php wp_nav_menu(array('theme location' => 'header')); ?>
            </ul>
            </div>
            <a href="https://www.pressaudiovisual.com"><img class="sm:w-11/12"src="#" alt="Logo Press"></a>
        </div>
        <div class="md:w-auto justify-center text-white font-bold navbar-center hidden lg:flex">
            <div class="menu menu-horizontal px-1">
                <?php wp_nav_menu(array('theme location' => 'header')); ?>
            </div>
        </div>
</header>
    
