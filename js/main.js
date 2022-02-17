$('.wrapper').click(function() {
    $(this).toggleClass('spoiler_open');
});
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
$('.burger_button').click(function() {
    $('.burger_menu').removeClass('mobile_menu_hide');
    $('.burger_menu').addClass('mobile_menu_show');
    $('html').attr('style', 'overflow-y:hidden');
    $('body').attr('style', 'overflow-y:hidden');
});

$('.mobile_menu_close').click(function() {
    $('.burger_menu').removeClass('mobile_menu_show');
    $('.burger_menu').addClass('mobile_menu_hide');
    $('body').attr('style', 'overflow-y:scroll');
    $('html').attr('style', 'overflow-y:scroll');
})