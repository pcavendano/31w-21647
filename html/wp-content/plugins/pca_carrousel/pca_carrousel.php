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
    $contenu = "<div class='carrousel'>Carrousel</div>";
    return $contenu;
};
add_shortcode('pca_carrousel, genere_boite');