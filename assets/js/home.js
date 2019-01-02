(function ($, window, document, undefined) {
  'use strict';

  function animateElement(animation, screen_offset) {
    animation = animation || defaultAnimation;

    $('.animate-queued').each(function (index, element) {
      var $currentElement = $(element);

      if (isOnScreen($currentElement, screen_offset)) {
        animation($currentElement);
      }
    });
  }

  function defaultAnimation(element, animation_name) {
    animation_name = animation_name || 'fadeInDown little-slow';

    element.removeClass('invisible-for-animation');
    element.addClass('animated ' + animation_name);
  }

  function homeSectionAnimation(element, delay_step) {
    delay_step = delay_step || 200;

    var $title = element.find('.title');
    var $description = element.find('.description');
    var $content = element.find('.content');
    var $media = element.find('.media');
    var $text = element.find('.text');
    var $buttons = element.find('.btn');
    var $product_mock = element.find('.product-mock');

    if ($media.length !== 0) {
      $media.removeClass('invisible-for-animation');
      defaultAnimation($media);
    }
    if ($text.length !== 0) {
      $text.removeClass('invisible-for-animation');
    }
    if ($title.length !== 0) {
      $title.removeClass('invisible-for-animation');
      defaultAnimation($title);
    }
    if ($product_mock.length !== 0) {
      $product_mock.removeClass('invisible-for-animation');
      defaultAnimation($product_mock);
    }

    if ($description.length !== 0) {
      setInterval(function() {
        $description.removeClass('invisible-for-animation');
        defaultAnimation($description);
      }, delay_step);
    }

    if ($content.length !== 0) {
      setInterval(function() {
        $content.removeClass('invisible-for-animation');
        defaultAnimation($content);
      }, delay_step * 2);
    }

    if ($buttons.length !== 0) {
      $.each($buttons, function(index, button) {
        var a = setInterval(function() {
          $(button).removeClass('invisible-for-animation');
          defaultAnimation($(button));
          clearInterval(a);
        }, delay_step * 3 + index * delay_step / 2);
      });
    }
  }

  function isOnScreen(element, display_offset) {
    if (display_offset === undefined){
      display_offset = $(window).height() / 2;
    }

    var windowTop = $(window).scrollTop()
    var windowBottom = windowTop + $(window).height();

    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.outerHeight();

    var middleWindow = (windowTop + windowBottom) / 2;
    var middleElement = (elementTop + elementBottom) / 2;

    var isCenter = (middleElement > middleWindow - display_offset) && (middleElement < middleWindow + display_offset)
    if (isCenter) {
      return true;
    }

    // Detect that the element is on screen and screen can no longer scroll
    if (windowBottom == $(document).height()) {
      // return true if element is in the view
      if (windowTop < elementTop) {
        return true;
      }
    }

    return false;
  }

  $(window).on('resize scroll', function (e) {
    animateElement(homeSectionAnimation);
  });

  $(window).on('load', function() {
    setInterval(function() {
      animateElement(homeSectionAnimation, $(window).height());
    }, 1000);
  });

}(jQuery, window, document));