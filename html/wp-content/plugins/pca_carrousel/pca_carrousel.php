<?php
/*
* package Carrousel
* version 0.1
*/
/*
* Plugin Name: PCA_Carrousel
* version 0.1
*/

/*
filemtime()  // retourne en milliseconde le temps de la dernière sauvegarde
plugin_dir_path() // retourne le chemin du répertoire du plugin
__FILE__ // le fichier en train de s'exécuter
wp_enqueue_style() // Intègre le link:css dans la page
wp_enqueue_script() // intègre le script dans la page
wp_enqueue_scripts // le hook
*/

function pcac_enqueue() {
	$version_css = filemtime(plugin_dir_path(__FILE__)."style.css");
	$version_js = filemtime(plugin_dir_path(__FILE__)."js/carrousel.js");
	wp_enqueue_style("pca_style_carrousel",
	plugin_dir_url(),"style.css",
	array(),
		$version_css,
		false);

	wp_enqueue_js("pca_js_carrousel",
		plugin_dir_url(),"js/carrousel.js",
		array(),
		$version_js,
		false);
}
add_action("wp_enqueue_scripts","pcac_enqueue");

function genere_boite(){
	$contenu = "<div class='carrousel'>Carrousel</div>";
	return $contenu;
}
add_shortcode('pca_carrousel', 'genere_boite');