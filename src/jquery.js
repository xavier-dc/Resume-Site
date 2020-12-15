$(document).ready(function() {
    $("#name, h3, p").animate({
        padding: "+8px",
        opacity: 1
}, 2000);

//----------attempting to create a custom jQuery method. In general, animations need to happen inside empty containers that are already set in size, so that nothing is being created on the page when scrolled to.
jQuery.fn.extend({
    reveal: function() {
        return this.each(function() {
            $(this).click(function() {
                var pageId = $(this).attr("page");
                $('#'+pageId).fadeIn(0);
                $('html, body').animate({ scrollTop: $("#"+pageId).offset().top -50}, 100);
            });
        });
    }
});

// $('h1').each(function() {
//     var y = $(document).scrollTop();
//     var t = $(this).parent().offset().top;
//     if (y > t) {
//         $(this).fadeIn()
//     } else {
//         $(this).fadeOut();
//     }
// });

$('#home-click').reveal();
$('#aboutme-click').reveal();
$('#projects-click').reveal();
$('#technologies-click').click(function() {
    $('#projects').fadeIn(0);
})
$('#technologies-click').reveal();

// $('#aboutme-click').click(function() {
//     var pageId = $(this).attr("page");
//     $('#about-me').show(.01);
//     $('html, body').animate({ scrollTop: $("#"+pageId).offset().top}, 100);
// });

// $('#projects-click').click(function() {
//     var pageId = $(this).attr("page");
//     $('#projects').show(.01);
//     $('html, body').animate({ scrollTop: $("#"+pageId).offset().top}, 100);
// })

// $('#technologies-click').click(function() {
//     var pageId = $(this).attr("page");
//     $('#technologies').show(.01);
//     $('html, body').animate({ scrollTop: $("#"+pageId).offset().top}, 100);
// })

})
//---------document ready ends

$(document).scroll(function () {
var scrollval = $(document).scrollTop();
var height = $(window).height();

scrollval >= 0 ? $("#about-me").animate({
        top:"-10px",
}, 2000) : $("#about-me").fadeOut(100);

height - scrollval <= 1000 ? $("#projects").fadeIn(1000) : $('#projects').fadeOut();

height - scrollval <= 1 ? $("#technologies").show(500) : $('#technologies').fadeOut();
})