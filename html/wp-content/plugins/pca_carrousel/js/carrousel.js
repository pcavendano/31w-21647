(function () {
    console.log("carrousel");
    let elmBtnModale = document.querySelector(".btn_modale");
    let elmBtnModaleFermer = document.querySelector(".btn_fermer");
    let elmCarrousel = document.querySelector(".carrousel");
    elmBtnModale.addEventListener("mousedown" , function () {
    console.log("bouton boîte modale");
    elmCarrousel.classList.add("carrousel-ouvrir");
    });
    elmBtnModaleFermer.addEventListener("mousedown" , function () {
        console.log("bouton boîte modale");
        elmCarrousel.classList.remove("carrousel-ouvrir");
    });
})();