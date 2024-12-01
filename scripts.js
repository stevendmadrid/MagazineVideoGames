$(document).ready(function(e){
        
    $('.latest-news-slider').slick({
        asNavFor: '.latest-news-slider-2',
        arrows: false,
    });
    
    $('.latest-news-slider-2').slick({
        autoplay: true,
        pauseOnHover: true,
        arrows: true,
        dots: false,
        asNavFor: '.latest-news-slider',
        infinite: true
    });
    
});