const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        992: {
        //   edgePadding: 20,
        //   gutter: 20,
        //   items: 1,
          nav: false,
        }
    }
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  })

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });
    })(jQuery);