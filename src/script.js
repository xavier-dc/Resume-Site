const faders = document.querySelectorAll('.fade-in');
const slideleft = document.querySelectorAll('.from-left');
const slideright = document.querySelectorAll('.from-right');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

slideleft.forEach(slider => {
    appearOnScroll.observe(slider);
})

slideright.forEach(slider => {
    appearOnScroll.observe(slider);
})