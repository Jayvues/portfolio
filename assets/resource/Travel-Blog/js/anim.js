$(function() {
    // Slideshow 4
    $("#slider3").responsiveSlides({
        auto: true,
        pager: true,
        nav: false,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function() {
            $('.events').append("<li>after event fired.</li>");
        }
    });

});


link rel = "stylesheet"
href = "css/flexslider.css"
type = "text/css"
media = "screen"
property = "" / >
    <
    script defer src = "js/jquery.flexslider.js" > < /script> <
script >
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            start: function(slider) {
                $('body').removeClass('loading');
            }
        });
    }); <
/script>
<!-- //flexSlider (for testimonials) -->

<!-- smooth scrolling -->
<
script src = "js/SmoothScroll.min.js" > < /script>
    <!-- //smooth scrolling -->

<!-- start-smoth-scrolling -->
<
script src = "js/move-top.js" > < /script> <
script src = "js/easing.js" > < /script> <
script >
    jQuery(document).ready(function($) {
        $(".scroll").click(function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        });
    }); <
/script>
<!-- start-smoth-scrolling -->

<!-- smooth scrolling-bottom-to-top -->
<
script >
    $(document).ready(function() {
        /*
            var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear' 
            };
        */
        $().UItoTop({
            easingType: 'easeOutQuart'
        });
    });