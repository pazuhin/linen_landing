var catalogLink = document.querySelector('.catalog-btn');
var catalog = document.querySelector('.catalog');

catalogLink.addEventListener('click', function(e) {
    e.preventDefault();
    var target = e.target;

    if(target.classList.contains('catalog-btn')) {
        var content = target.nextElementSibling;

        if(!catalog.classList.contains('catalog--active')) {
            catalog.classList.add('catalog--active');

            content.style.height = content.scrollHeight + 'px';
        } else {
            catalog.classList.remove('catalog--active');
            content.style.height = 0;
        }
    }
});


$(document).ready(function() {
    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.form-page').addClass('is-active');
            $('.modal-overlay').removeClass('active');
            $('.modal').removeClass('active');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
//Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {

    var result = document.getElementById('result'),
        myMap = new ymaps.Map('map', {
            center: [55.753559, 37.609218], // Москва
            zoom: 12
        });

    // все ок
    result.textContent = 'map init';

    // куда скакать
    function clickGoto() {

        // город
        var city = this.getAttribute('data-goto'); // или this.getAttribute('title')
        result.textContent = city;

        // получение координат по адресу - асинхронная функция
        var myGeocoder = ymaps.geocode(city);
        myGeocoder.then(
            function(res) {
                coords = res.geoObjects.get(0).geometry.getCoordinates();

                // переходим по координатам
                myMap.panTo(coords, {
                    flying: 1
                });
                // добавляем маркер
                var placeMark = new ymaps.Placemark(coords, {
                    balloonContent: city
                });
                myMap.geoObjects.add(placeMark);
            },
            function(err) {
                alert('Ошибка');
            }
        );
        return false;
    }

    // навешиваем обработчики
    var col = document.getElementsByClassName('goto');
    for (var i = 0, n = col.length; i < n; ++i) {
        col[i].onclick = clickGoto;
        result.textContent = result.textContent + ' ' + i;
    }
}
var modalOverlay = document.querySelector(".modal-overlay");
var modal = document.querySelector(".modal");
var btn = document.querySelector(".header__btn-link");
var closeBtn = document.querySelector(".close-modal");
var footerBtn = document.querySelector(".footer__btn-link");
var appLink = document.querySelector(".application-link");
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
    }
});

appLink.addEventListener('click', function(e) {
    e.preventDefault();
    formPage.classList.remove('is-active');
});

