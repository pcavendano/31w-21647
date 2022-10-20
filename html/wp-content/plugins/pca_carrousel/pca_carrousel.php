<?php
/*
* package Carrousel
* version 0.1
*/
/*
* Plugin Name: PCA_Carrousel
* version 0.1
*/


function genere_boite(){
	$contenu = "
    <style>
    .carrousel {
        border: 2px solid #aaa;
        background-color : #0f0;
        width: 200px;
        height : 200px;
    }
    </style>    
    <div class='carrousel'>Carrousel</div>";
	return $contenu;
}
add_shortcode('pca_carrousel', 'genere_boite');