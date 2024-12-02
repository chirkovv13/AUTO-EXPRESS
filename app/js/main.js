$(function () {
  $(".slider__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect:  true,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  });
});
