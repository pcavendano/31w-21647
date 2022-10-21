(function () {
    console.log("carrousel");
    /* -------------------------------- Les éléments du carrousel */
    /* Le conteneur principal du carrousel */
    let elmCarrousel = document.querySelector(" . carrousel");
    /* Bouton temporaire pour ouvrir le carrousel */
    let elmBtnModale = document.querySelector(" . btn_modale");
    /* Bouton de fermeture du carrousel le X de fermeture */
    let elmBtnModaleFermer = document.querySelector(" . btn_fermer");
    /* figure qui contiendra l'ensemble des images du carrousel */
    let elmCarrousel_figure = document.querySelector(' . carrousel_ figure');
    /* le formulaire qui contiendra l'ensemble des boutons radio */
    let elmCarrousel_form  = document.querySelector(' . carrousel_ form');

    /* -------------------------------- Les éléments de la galerie */
    /*Le conteneur principale de la galerie*/
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerieImg = document.querySelector('.galerie figure img');
    /* ----------------Étape 1 parcourir les images de la galerie------------------------ */
    elmGalerie.forEach();

    for(const elmImg of elmGalerieImg){
     ajouter_img_carrousel(elmImg);
     ajouter_radio_carrousel(elmImg);
    }

    function ajouter_img_carrousel(elmImg) {
// elmImg représente une image de la galerie */
        let elmCarrousel_figure_img = document.createElement("img");
        elmCarrousel_figure_img.setAttribute("src", elmImg.getAttribute("src"));
        elmCarrousel_figure_img.classList.add("carrousel_figure_img");
        elmCarrousel_figure.appendChild(elmCarrousel_figure_img);
    }

    function ajouter_img_carrousel(elmImg) {
    }
    elmBtnModale.addEventListener("mousedown" , function () {
    console.log("bouton boîte modale");
    elmCarrousel.classList.add("carrousel-ouvrir");
    });
    elmBtnModaleFermer.addEventListener("mousedown" , function () {
        console.log("bouton boîte modale");
        elmCarrousel.classList.remove("carrousel-ouvrir");
    });
})();