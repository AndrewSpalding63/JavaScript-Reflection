$(document).ready(function () {
  var $mainOuter = $('.main-outer')
  var $header = $('.header')
  var position = $(window).scrollTop();

  
    $mainOuter.scroll(function () {
      var scroll = $mainOuter.scrollTop();
      // TAKING WIDTH OF THE HEADER ELEMENT FOR ADDING CHANGES 
      if (scroll >= 219) {

                if (scroll > position) {
              // console.log('scrollDown');
              if ($header.css('display') !== 'none') {
                  $header.css('display', 'block')
              }
              $header.addClass('header-sticky')

              if ($header.css('display') === 'block') {
                  // console.log('block')
                  $header.slideUp()
              }
          } else {
              // console.log('scrollUp');
              $header.slideDown()
            //   console.log('slidedown')

          }
          position = scroll;
      }
      if (scroll < 219) {
        //   console.log('219')
          if ($header.hasClass('header-sticky')) {
              $header.removeClass('header-sticky')
              $header.css('display', 'block')
          }
      }
  });

  // ADDING KEY VALUES TO SLICK PLUGIN CAROUSEL
  $('.basic').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
  });
})