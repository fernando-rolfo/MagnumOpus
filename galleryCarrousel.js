$(document).ready(function () {
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        easing: 'linear',
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 700, // Define el punto de quiebre para dispositivos móviles (puedes ajustar este valor según tus necesidades)
                settings: {
                    slidesToShow: 2
                }
            }
        ]

    });

});


