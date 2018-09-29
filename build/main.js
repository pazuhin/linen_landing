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