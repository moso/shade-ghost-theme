// SOLID NAVBAR ON SCROLL
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".fixed-top").addClass("navbar-solid");
    } else {
        $(".fixed-top").removeClass("navbar-solid");
    }
});