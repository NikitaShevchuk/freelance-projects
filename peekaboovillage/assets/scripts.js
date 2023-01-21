$(document).ready(function($){


    $('.blog-section__background img').ready(function() {
        var blogHeight = $('.blog-section__background').height();
	    $('.blog-section__item').css('height', ( blogHeight + '' ))
    })


	$('.whatsapp__trigger-icon').click(function() {
		$('.whatsapp-fixed').addClass('active')
		$('.whatsapp__trigger-icon-close').addClass('active')
		$('.contact-fixed__form-trigger').addClass('hidden')
	})
	$('.whatsapp__trigger-icon-close').click(function() {
		$('.whatsapp-fixed').removeClass('active')
		$('.contact-fixed__form-trigger').removeClass('hidden')
		$(this).removeClass('active')
	})

	$('.contact-fixed__form-text.append').appendTo('.contact-main__form')

	$('.contact__trigger-icon').click(function() {
		$('.contact-fixed__form').addClass('active')
		$('.contact__fixed-icon-close').addClass('active')
		$('.whatsapp__trigger').hide()
	})
	$('.contact__fixed-icon-close').click(function() {
		$('.contact-fixed__form').removeClass('active')
		$('.whatsapp__trigger').show()
		$(this).removeClass('active')
	})

	$('.article-content__text .gallery-item').appendTo('.gallery-section-row').wrap('<div class="col-12 col-md-6 col-xl-4 gallery-section__grid" />')
	$('.article-content__text img').appendTo('.article-content__image')
	$('.gallery-section-row .gallery-item img').clone().appendTo('.slider-wrapper-2').wrap('<div class="gallery-slider__item" />')
	
	$('.gallery-item').click(function(){
		$('.gallery-slider__wrapper').addClass('active')
		$('.slider-wrapper-2').slick({
		  infinite: false,
		  dots: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
  		  arrows: true
		});
	})
	$('.gallery-slider__close').click(function(){
		$('.gallery-slider__wrapper').removeClass('active')
	})
	$(window).scroll(function(){


	  var sticky = $('.header-fixed'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 200) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
	$(".hamburger").click(function() {
	$(".nav-mobile").toggleClass('active');
    $(".stick").toggleClass(function () {
      return $(this).is('.open, .close') ? 'open close' : 'open';
    });
  });

	
	
	$(window).resize(function(){

	
		blogHeight = $('.blog-section__background').height();	
		$('.blog-section__item').css('height', ( blogHeight + '' ))

	
	})

})