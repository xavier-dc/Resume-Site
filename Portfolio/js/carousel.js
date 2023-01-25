let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');
let startingOpacity = document.querySelector('.slide').style.opacity;
let startingTransform = document.querySelector('#name').style.marginTop;

let pressed = false;
let startX;
let x;

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};

sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
    document.querySelectorAll('.slide').forEach(slide => slide.style.opacity = 1);
    //Todo: intro text goes away...
    document.querySelectorAll('#name').forEach(name => { name.style.opacity = 0; name.style.marginTop = '30px'; });
});

sliderContainer.addEventListener("mouseleave", () => {
    document.querySelectorAll('.slide').forEach(slide => slide.style.opacity = startingOpacity);
    //Todo: intro text reappears
    document.querySelectorAll('#name').forEach(name => { name.style.opacity = 1; name.style.marginTop = startingTransform });
})

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundary();
});