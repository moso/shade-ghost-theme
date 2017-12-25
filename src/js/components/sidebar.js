/*!
 * Offcanvas Sidebar v0.1
 * Copyright 2017 - present Morten Sørensen (https://moso.io)
 * Licensed under the MIT license
 * --------------------------------------------------------------
 * Script that clones the current Bootstrap markup,
 * and inserts it into a sidebar with some smooth animations
 *
 * - Built to work with Bootstrap 4 and supports multiple navbars
 * - Fully customizable with comments
 *
 * Demo with multiple navbars: https://codepen.io/moso/pen/LjvRep
 */
var window_height;
var window_width;
var navbar_initialized = false;
var nav_toggle;

var shadeNav = {
    sidenav: {
        // Sidenav is not visible by default.
        // Change to 1 if necessary
        sidenav_visible: 0
    },
    initSideNav: function initSideNav() {
        if (!navbar_initialized) {
            var $nav = $('nav');

            // Add the offcanvas class to the navbar if it's not initialized
            $nav.addClass('navbar-shade');

            // Clone relevant navbar
            var $navbar = $nav.find('.navbar-collapse').first().clone(true);

            // Set min-height of the new sidebar to the screen height
            $navbar.css('min-height', window.screen.height);

            // Let's start with an empty var
            var ul_content = '';

            // Take the content of the Bootstrap-syntaxed .navbar-collapse
            $navbar.children('ul').each(function () {
                var show_content = $(this).html();
                ul_content = ul_content + show_content;
            });

            // Wrap the new content inside an <ul> of our choosing
            ul_content = '<ul class="navbar-nav">' + ul_content + '</ul>';

            // Insert the html content into our cloned content
            $navbar.html(ul_content);

            // Append the new sidebar to body
            $('body').append($navbar);

            // Set the toggle-variable to the Bootstrap navbar-toggler button
            var $toggle = $('.navbar-toggler');

            // Add/remove classes on toggle and set the visiblity of the sidenav,
            // and append the overlay. Also if the user clicks the overlay,
            // the sidebar will close
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

                    // Add the overlay and make it close the sidenav on click
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
            // Set navbar to initialized
            navbar_initialized = true;
        }
    }
};

$(document).ready(function () {
    window_width = $(window).width();
    window_height = $(window).height();

    nav_toggle = $('nav').hasClass('navbar-shade') ? true : false;

    // Responsive checks
    if (window_width < 992 || nav_toggle) {
        shadeNav.initSideNav();
    }

    // Close the sidebar if the user clicks a link
    $('.navbar-side-item a').on('click', function () {
        var $toggle = $('.navbar-toggler');

        $('html').removeClass('nav-open');
        shadeNav.sidenav.sidenav_visible = 0;
        setTimeout(function () {
            $toggle.removeClass('toggled');
        }, 300);
    });
});

$(window).resize(function () {
    // More responsive checks if the user resize the browser
    if ($(window).width() < 992) {
        shadeNav.initSideNav();
    }

    if ($(window).width() > 992 && !nav_toggle) {
        $('nav').removeClass('navbar-shade');
        shadeNav.sidenav.sidenav_visible = 1;
        navbar_initialized = false;
    }
});
