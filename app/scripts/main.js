jQuery(document).ready(function(){
    attachEventHandlers();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
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