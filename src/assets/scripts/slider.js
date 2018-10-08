$(document).ready(function() {
    $('#vertical').lightSlider({
        enableDrag: false,
        gallery:true,
        item:1,
        vertical:true,
        verticalHeight:550,
        vThumbWidth:50,
        thumbItem:8,
        thumbMargin:4,
        slideMargin:0,
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#vertical .lslide'
            });
        }
    });
});