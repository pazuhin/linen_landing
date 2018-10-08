var modalOverlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".modal");
var btn = document.querySelector(".header__btn-link");
var closeBtn = document.querySelector(".close-modal");
var footerBtn = document.querySelector(".footer__btn-link");
var formPage = document.querySelector(".form-page");
var formBtn = document.querySelector(".form__btn-link");


footerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    modalOverlay.classList.add('active');
});

btn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    modalOverlay.classList.add('active');
});


closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', function(e){
    if(e.target === modalOverlay){
        modalOverlay.classList.remove('active');
        modal.classList.remove('active');
    }
});



