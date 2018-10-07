var acco = document.querySelector('.acco');
var items = acco.getElementsByClassName('acco__item');
var contents = document.getElementsByClassName('acco__block');

acco.addEventListener('click', function(e) {
    e.preventDefault();
    var target = e.target;

    if(target.classList.contains('acco__trigger')) {
// console.log(target);
        var content = target.nextElementSibling;
        var item = target.parentNode;
        console.log(item);

        if(!item.classList.contains('acco__item--active')) {

            for (var i = 0; i < items.length; i++) {
                items[i].classList.remove('acco__item--active');
            }
            item.classList.add('acco__item--active');

            for (var i = 0; i < contents.length; i++) {
                contents[i].style.height = 0;
            }

            content.style.height = content.scrollHeight + 'px';
        } else {
            item.classList.remove('acco__item--active');
            content.style.height = 0;
        }
    }
});


