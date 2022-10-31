<?php
/*
* package Carrousel
* version 0.1
*/
/*
* Plugin Name: pca_carrousel
 * Description: Plugin pour afficher les images d'un post dans un carrousel
 * Author: Pedro COntreras Avendano
* version 0.1
*/



function genere_boite(){
	$contenu = "
    <div class='carrousel'>
        <button class='btn_fermer'>X</button>
        <figure class='carrousel__figure'></figure>
        <form class='carrousel__form'></form>
    </div>";
	return $contenu;
}
add_shortcode('pca_carrousel', 'genere_boite');

function pcac_enqueue() {
	//on ajoute filemtime parceque wp garde en cache le fichiers css et js et donc filemtime permet davoir une nouvelle version du fichier a chaque fois
	//filemtime retourne en millisecondes le temps de la dernière sauvegarde
	// __FILE__ le fichier en train de s'exécuter
	//plugin_dir_path retourne le chemin du répertoire du plugin
	$version_css = filemtime(plugin_dir_path(__FILE__)."style.css");
	$version_js = filemtime(plugin_dir_path(__FILE__)."js/carrousel.js");

	//Intègre le link:css dans la page
	wp_enqueue_style("pca_style_carrousel",
		plugin_dir_url(__FILE__)."style.css",
		array(),
		$version_css,
		false);
	//Intègre le script dans la page
	wp_enqueue_script("pca_js_carrousel",
		plugin_dir_url(__FILE__) . "js/carrousel.js",
		array(),
		$version_js,
		true);
}
add_action("wp_enqueue_scripts","pcac_enqueue");