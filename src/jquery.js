$(document).ready(function() {
    $("#name, h3, p").animate({
        padding: "+8px",
        opacity: 1
}, 2000);

$('#aboutme-click').click(function() {
    var pageId = $(this).attr("page");
    $('#about-me').show(.01);
    $('html, body').animate({ scrollTop: $("#"+pageId).offset().top}, 100);
});

$('#projects-click').click(function() {
    var pageId = $(this).attr("page");
    $('#projects').show(.01);
    $('html, body').animate({ scrollTop: $("#"+pageId).offset().top}, 100);
})

$('#technologies-click').click(function() {
    var pageId = $(this).attr("page");
    $('#technologies').show(.01);
    $('html, body').animate({ scrollTop: $("#"+pageId).offset().top}, 100);
})

})
//---------document ready ends

$(document).scroll(function () {
var scrollval = $(document).scrollTop();

scrollval >= 0 ? $("#about-me").animate({
        top:"-10px",
}, 2000) : $("#about-me").fadeOut(1);

scrollval >= ($("#about-me").innerHeight() - 10) ? $("#projects").fadeIn(500) : $("#projects").fadeOut(1);

scrollval >= ($("#projects").innerHeight() - 10) ? $("#technologies").show(500) : $("#technologies").fadeOut(1);
})