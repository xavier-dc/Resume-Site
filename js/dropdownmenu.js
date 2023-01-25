$(document).ready(function() {
    $("#name, h3, p").animate({
        padding: "+8px",
        opacity: 1
}, 2000);

$('.menu a').on("click", function() {
    $('.menu').slideUp();
    }
)

$('#toggle').on('click', function() {
    if ($('.menu').is(':visible')) {
        $('.menu').slideUp();
    } else {
        $('.menu').slideDown();
    }
})
})