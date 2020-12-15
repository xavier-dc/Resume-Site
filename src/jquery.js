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
                $('#'+pageId).hide(0);
                $('#'+pageId).show(1000);
                $('html, body').animate({ scrollTop: $("#"+pageId).offset().top}, 100);
            });
        });
    }
});

$('#aboutme-click').reveal();
$('#projects-click').reveal();

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

// $(document).scroll(function () {
// var scrollval = $(document).scrollTop();

// scrollval >= 0 ? $("#about-me").animate({
//         top:"-10px",
// }, 2000) : $("#about-me").fadeOut(100);

// scrollval >= ($("#about-me").innerHeight() - 10) || scrollval <= ($('#projects').innerHeight() + 10) ? $("#projects").fadeIn(500) : $("#projects").fadeOut(100);

// scrollval >= ($("#projects").innerHeight() - 10) || scrollval <= ($('#technologies').innerHeight() + 10) ? $("#technologies").show(1000) : $("#technologies").fadeOut(100);
// })