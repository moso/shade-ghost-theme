// In lack of affixed navbar in Bootstrap 4
$(document).ready(function() {
    var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;
    
        if (scrollElement.scrollTop() >= top){
            wrapper.height(height);
            affixElement.addClass("affix");
        } else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }
    };

    // Remember to put 'data-toggle="affix"' on <nav>.
    // If you want different styling for the affixed nav
    // then check the _nav.scss file.
    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');
    
        ele.before(wrapper);
    
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });
    
        // Init
        toggleAffix(ele, $(window), wrapper);
    });  
});