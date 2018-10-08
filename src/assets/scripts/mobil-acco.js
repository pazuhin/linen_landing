var blockAside = document.querySelector(".catalog-block__left");
var catalogTrigger = document.querySelector(".catalog__trigger");

catalogTrigger.addEventListener("click", navOpen);

function navOpen(e) {
    e.preventDefault();
    blockAside.classList.toggle("is-open");
}

$('.catalog__trigger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('catalog__trigger_active');
});