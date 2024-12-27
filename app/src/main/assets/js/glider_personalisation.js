window.addEventListener('load', function() {
    document.querySelector('.glider').addEventListener('glider-slide-visible', function(event) {
        var glider = Glider(this);
        console.log('Slide Visible %s', event.detail.slide)
    });
    document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event) {
        console.log('Slide Hidden %s', event.detail.slide)
    });
    document.querySelector('.glider').addEventListener('glider-loaded', function(event) {
        var glider = Glider(this);
        glider.scrollItem(1, true);
    });

    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        draggable: false,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

});