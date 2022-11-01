(function () {
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
    for (const elmImg of elmGalerieImg) {
        ajouter_img_carrousel(elmImg);
        ajouter_radio_carrousel();
       // ajouter_fleche_carrousel();
        /* écouteur sur les images de la galerie */
        elmImg.addEventListener("mousedown", function () {
            elmCarrousel.classList.add("carrousel--ouvrir");
            elmCarrousel__figure.children[this.dataset.index].classList.add(
                "carrousel__figure__img--activer"
            );
            elmCarrousel__form.children[this.dataset.index].checked = true;
            console.log(index);
            dernierIndex = this.dataset.index;
        });
    }

    /**
     * Ajoute une image dans le carrousel
     * @param {*} elmImg une image de la galerie
     */
    function ajouter_img_carrousel(elmImg) {
// elmImg représente une image de la galerie */
        elmImg.dataset.index = index;
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
        /*------------------------- écouteur sur le bouton radio pour afficher une nouvelle image */
        elmCarrousel__form__radio.addEventListener('mousedown', function (){
            if (dernierIndex != -1) {
                elmCarrousel__figure.children[dernierIndex].classList.remove(
                    "carrousel__figure__img--activer"
                );
            }

            elmCarrousel__figure.children[this.dataset.index].classList.add(
                "carrousel__figure__img--activer"
            );
            dernierIndex = this.dataset.index;
        });
    }

    function ajouter_fleche_carrousel() {

        let elmCarrousel__fleche__droite = document.createElement('svg');
        elmCarrousel__fleche__droite.setAttribute('name', 'carrousel__fleche--droite');
        elmCarrousel__fleche__droite.setAttribute('class' ,'carrousel__fleche--droite');
        elmCarrousel__fleche__droite.setAttribute('type' ,'radio');
        elmCarrousel__fleche__droite.dataset.index = index;
        index++;
        elmCarrousel__form.appendChild(elmCarrousel__fleche__droite);
        /*------------------------- écouteur sur le bouton radio pour afficher une nouvelle image */
        elmCarrousel__fleche__droite.addEventListener('mousedown', function (){
            if (dernierIndex != -1) {
                elmCarrousel__figure.children[dernierIndex].classList.remove(
                    "carrousel__figure__img--activer"
                );
            }

            elmCarrousel__figure.children[this.dataset.index].classList.add(
                "carrousel__figure__img--activer"
            );
            dernierIndex = this.dataset.index;
        });
    }

    elmBtnModaleFermer.addEventListener("mousedown" , function () {
        elmCarrousel.classList.remove("carrousel--ouvrir");
    });
})();