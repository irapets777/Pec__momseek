// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });

$('.item').on('click', function() {
  $('.item').removeClass('active');
  $(this).addClass('active');
  let tabs = $ (this) .data( "tabs");

  $('.content').addClass('d-none');
  $('.content[data-tabs = ' + tabs + ']').removeClass('d-none');
  $('.content[data-tabs = ' + tabs + ']').addClass('d-block');

})

