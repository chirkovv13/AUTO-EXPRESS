$(function () {
  // slider
  $(".slider__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    // адаптив slider
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
