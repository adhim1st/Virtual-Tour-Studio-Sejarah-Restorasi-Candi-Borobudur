 $('#fullpage').fullpage({
    anchors: ['start', 'virtualtour', 'about'],
    sectionsColor: ['#fff', '#00BFFF', '#F5F5F5'],
    scrollingSpeed: 500,
    afterLoad: function(anchorLink, index) {
        var loadedSection = $(this);
        if (anchorLink == 'start') {
            $("#header-top").hide();
        }
        else if (anchorLink == 'about') {
            $("#footer-bot").hide();
        }
    },
    onLeave: function(index, nextIndex, direction) {
        var leavingSection = $(this);
        if (index == 2 && direction == 'down') {
            $("#footer-bot").fadeOut(500);
        } else if (index == 3 && direction == 'up') {
            $("#footer-bot").fadeIn(500);
            $("#header-top").fadeIn(500);
        } else if (index == 1 && direction == 'down') {
            $("#header-top").fadeIn(500);
        } else if (index == 2 && direction == 'up') {
            $("#header-top").fadeOut(500);
        }
    }
 });
 $(document).on('click', '#footer-bot', function() {
    $.fn.fullpage.moveSectionDown();
 });
 $(document).on('click', '#header-top', function() {
    $.fn.fullpage.moveSectionUp();
 });