var modalImg = document.querySelector(".modal-img");
var modalContent = document.querySelector(".modal-img__content");
var triggers = document.querySelectorAll(".gallery__img-link");
var closeModal = document.querySelector(".close-modal-img");
console.log(closeModal);

Array.prototype.forEach.call(triggers, function(trigger) {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        modalContent.classList.add('active');
        modalImg.classList.add('active');
    })
});

closeModal.addEventListener('click', function(e) {
    e.preventDefault();
    modalContent.classList.remove('active');
    modalImg.classList.remove('active');
});

modalImg.addEventListener('click', function(e){
    if(e.target === modalImg){
        modalImg.classList.remove('active');
        modalContent.classList.remove('active');
    }
});

