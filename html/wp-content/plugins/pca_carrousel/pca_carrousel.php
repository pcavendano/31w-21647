<?php
/*
* package Carrousel
* version 0.1
*/
/*
* Plugin Name: pca_carrousel
* version 0.1
*/



function genere_boite(){
	$contenu = "
    <button class='btn_modale'>boîte modale</button>
    <div class='carrousel'>
        <button class='btn_fermer'>X</button>
        <figure class='carrousel__figure'></figure>
        <form class='carrousel__form'></form>
    </div>";
	return $contenu;
}
add_shortcode('pca_carrousel', 'genere_boite');

function pcac_enqueue() {
	$version_css = filemtime(plugin_dir_path(__FILE__)."style.css");
	$version_js = filemtime(plugin_dir_path(__FILE__)."js/carrousel.js");
	wp_enqueue_style("pca_style_carrousel",
		plugin_dir_url(__FILE__)."style.css",
		array(),
		$version_css,
		false);

	wp_enqueue_script("pca_js_carrousel",
		plugin_dir_url(__FILE__) . "js/carrousel.js",
		array(),
		$version_js,
		true);
}
add_action("wp_enqueue_scripts","pcac_enqueue");