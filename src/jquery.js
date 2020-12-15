$(document).ready(function() {
    $("#name, h3, p").animate({
        padding: "+8px",
        opacity: 1
}, 2000);
})

$(document).scroll(function () {
var scrollval = $(document).scrollTop();

scrollval >= 0 ? $("#about-me").animate({
        top:"-10px",
}, 2000) : $("#about-me").hide();

scrollval >= ($("#about-me").innerHeight() - 20) ? $("#projects").fadeIn(1000) : $("#projects").hide();

scrollval >= ($("#projects").innerHeight() - 10) ? $("#technologies").show("slow") : $("#technologies").hide();
})