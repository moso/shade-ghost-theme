// jQuery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// Popper.js
import Popper from 'popper.js';
window.Popper = Popper;


// SIDEBAR
var window_height;
var window_width;
var navbar_initialized = false;
var nav_toggle;

var shadeNav = {
    sidenav: {
        sidenav_visible: 0
    },
    initSideNav: function initSideNav() {
        if (!navbar_initialized) {
            var $nav = $('nav');
            $nav.addClass('navbar-shade');

            var $navbar = $nav.find('.navbar-collapse').first().clone(true);
            $navbar.css('min-height', window.screen.height);

            var ul_content = '';

            $navbar.children('ul').each(function () {
                var show_content = $(this).html();
                ul_content = ul_content + show_content;
            });

            ul_content = '<ul class="navbar-nav">' + ul_content + '</ul>';
            $navbar.html(ul_content);

            $('body').append($navbar);

            var $toggle = $('.navbar-toggler');

            $navbar.find('a').removeClass('btn btn-round btn-default');
            $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn.success btn-warning btn-danger');
            $navbar.find('button').addClass('btn-simple btn-block');

            $toggle.on('click', function () {
                if (shadeNav.sidenav.sidenav_visible == 1) {
                    $('html').removeClass('nav-open');
                    shadeNav.sidenav.sidenav_visible = 0;
                    $('#overlay').remove();
                    setTimeout(function () {
                        $toggle.removeClass('toggled');
                    }, 300);
                } else {
                    setTimeout(function () {
                        $toggle.addClass('toggled');
                    }, 300);

                    var div = '<div id="overlay"></div>';
                    $(div).appendTo("body").click(function () {
                        $('html').removeClass('nav-open');
                        shadeNav.sidenav.sidenav_visible = 0;
                        $('#overlay').remove();
                        setTimeout(function () {
                            $toggle.removeClass('toggled');
                        }, 300);
                    });

                    $('html').addClass('nav-open');
                    shadeNav.sidenav.sidenav_visible = 1;
                }
            });
            navbar_initialized = true;
        }
    }
};

$(document).ready(function () {
    window_width = $(window).width();
    window_height = $(window).height();

    nav_toggle = $('nav').hasClass('navbar-shade') ? true : false;

    if (window_width < 992 || nav_toggle) {
        shadeNav.initSideNav();
    }

    $('.nav-link').on('click', function () {
        var $toggle = $('.navbar-toggler');

        $('html').removeClass('nav-open');
        shadeNav.sidenav.sidenav_visible = 0;
        setTimeout(function () {
            $toggle.removeClass('toggled');
        }, 300);
    });
});

$(window).resize(function () {
    if ($(window).width() < 992) {
        shadeNav.initSideNav();
    }

    if ($(window).width() > 992 && !nav_toggle) {
        $('nav').removeClass('navbar-shade');
        shadeNav.sidenav.sidenav_visible = 1;
        navbar_initialized = false;
    }
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
