$(document).ready(function() {
    $("#name, h3, p").animate({
        opacity: 1,
}, 2000);
})

$(document).scroll(function () {
var windowheight = $(window).innerHeight();
var scrollval = $(document).scrollTop();

console.log($("#about-me").innerHeight());
console.log("scroll -> " + scrollval);

scrollval >= 0 ? $("#about-me").fadeIn(1000) : $("#about-me").hide();
scrollval >= ($("#about-me").innerHeight() - 10) ? $("#projects").fadeIn(1000) : $("#projects").hide();
scrollval >= ($("#projects").innerHeight() - 10) ? $("#technologies").show("slow") : $("#technologies").hide();
})