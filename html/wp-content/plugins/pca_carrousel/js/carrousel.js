(function () {
    console.log("carrousel");
    /*
    * -----------------------------------Initialisation de variables-------------*/
    let index = 0;
    let dernierIndex = -1;
    /* -------------------------------- Les éléments du carrousel */
    /* Le conteneur principal du carrousel */
    let elmCarrousel = document.querySelector(".carrousel");
    /* Bouton temporaire pour ouvrir le carrousel */
    let elmBtnModale = document.querySelector(".btn_modale");
    /* Bouton de fermeture du carrousel le X de fermeture */
    let elmBtnModaleFermer = document.querySelector(".btn_fermer");
    /* figure qui contiendra l'ensemble des images du carrousel */
    let elmCarrousel__figure = document.querySelector('.carrousel__figure');
    /* le formulaire qui contiendra l'ensemble des boutons radio */
    let elmCarrousel__form  = document.querySelector('.carrousel__form');

    /* -------------------------------- Les éléments de la galerie */
    /*Le conteneur principale de la galerie*/
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerieImg = document.querySelectorAll('.galerie figure img');
    /* ----------------Étape 1 parcourir les images de la galerie------------------------ */

    for(const elmImg of elmGalerieImg){
        ajouter_radio_carrousel();
        ajouter_img_carrousel(elmImg);
    }

    /**
     *
     * @param {*} elmImg une image de la galerie
     */
    function ajouter_img_carrousel(elmImg) {
// elmImg représente une image de la galerie */
        console.log(elmImg);
        let elmCarrousel__figure__img = document.createElement("img");
        elmCarrousel__figure__img.setAttribute("src", elmImg.getAttribute("src"));
        elmCarrousel__figure__img.classList.add("carrousel__figure__img");
        elmCarrousel__figure__img.dataset.index = index;
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
    }

    /**
     *
     * ajouter un radio bouton dans le carrousel
     */
    function ajouter_radio_carrousel() {

       let elmCarrousel__form__radio = document.createElement('input');
        elmCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
        elmCarrousel__form__radio.setAttribute('class' ,'carrousel__form__radio');
        elmCarrousel__form__radio.setAttribute('type' ,'radio');
        elmCarrousel__form__radio.dataset.index = index;
        index++;
        elmCarrousel__form.appendChild(elmCarrousel__form__radio);
        elmCarrousel__form__radio.addEventListener('mousedown', function (){
            console.log(this.dataset.index);

            elmCarrousel__figure.children[this.dataset.index].classList.add('.carrousel__figure__img--activer');
        });
    }

    elmBtnModale.addEventListener("mousedown" , function () {
    console.log("bouton boîte modale");
    elmCarrousel.classList.add("carrousel--ouvrir");
    });
    elmBtnModaleFermer.addEventListener("mousedown" , function () {
        console.log("bouton boîte modale");
        elmCarrousel.classList.remove("carrousel--ouvrir");
    });
})();