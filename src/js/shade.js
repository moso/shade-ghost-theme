// SIDEBAR
$(function() {
    // Open navbarSide when button is clicked
    $('.navbar-toggler').on('click', function() {
        $('.navbar-side').addClass('reveal');
        $('.overlay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function(){
        $('.navbar-side').removeClass('reveal');
        $('.overlay').hide();
    });
});

// INFINITE SCROLL PAGINATION
$(function() {
    var page = 2;
    var url_blog = window.location;
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $.get((url_blog +'/page/'+page),
            function(content) {
                if(page <= max_pages){
                    $('.content').append($(content).children(".post"));
                    page = page + 1;
                }
            });
        }
    });
});
