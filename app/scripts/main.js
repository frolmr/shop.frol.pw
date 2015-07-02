$(document).ready(function(){

    attachEventHandlers();
    htmSlider();

    $('.trigger__link').on('click', function(event){
        event.preventDefault();

        var $this = $(this),
            item = $this.closest('.trigger__slide'),
            container = $this.closest('.slider'),
            display = container.find('.slide'),
            path = item.find('img').attr('src');

        if (!item.hasClass('active')) {
            item.addClass('active').siblings().removeClass('active');

            display.find('img').fadeOut(200, function() {
                $(this).attr('src', path).fadeIn(200);
            });
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }
    });

    $('.scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        return false;
    });
});

function attachEventHandlers() {
    $('.cart').on('mouseenter', showCart);
    $('.cart').on('mouseleave', hideCart);
}

function showCart(){
    $('.cart__filling').show();
}

function hideCart(){
    $('.cart__filling').hide();
}

function addActive() {
    var triggers = $('.trigger__slide');
    triggers.last().addClass('active');
}

function htmSlider(){
    var slideWrap = jQuery('.trigger');
    var nextLink = jQuery('.next');
    var prevLink = jQuery('.prev');
    var slideWidth = jQuery('.trigger__slide').outerWidth();
    var scrollSlider = slideWrap.position().left - slideWidth;

    nextLink.click(function(){
        if(!slideWrap.is(':animated')) {
            slideWrap.animate({left: scrollSlider}, 500, function(){
                slideWrap
                    .find('.trigger__slide:first')
                    .appendTo(slideWrap)
                    .parent()
                    .css({'left': 0});
            });
        }
    });
    prevLink.click(function(){
        if(!slideWrap.is(':animated')) {
            slideWrap
                .css({'left': scrollSlider})
                .find('.trigger__slide:last')
                .prependTo(slideWrap)
                .parent()
                .animate({left: 0}, 500);
        }
    });

}
