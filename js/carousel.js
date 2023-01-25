let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');
let startingOpacity = document.querySelector('.slide').style.opacity;
let startingTransform = document.querySelector('#name').style.marginTop;

let pressed = false;
let startX;
let x;

// document.addEventListener("deviceready", init, false);

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

const fadeText = (transition) => {
    transition ? 
    () => {
    document.querySelectorAll('.slide').forEach(slide => slide.style.opacity = 1);
    //Todo: intro text goes away...
    document.querySelectorAll('#name').forEach(name => { name.style.opacity = 0; name.style.marginTop = '30px'; });
    } : 
    () => {
    document.querySelectorAll('.slide').forEach(slide => slide.style.opacity = startingOpacity);
    //Todo: intro text reappears
    document.querySelectorAll('#name').forEach(name => { name.style.opacity = 1; name.style.marginTop = startingTransform });
    }
}

sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
    fadeText(pressed);
});

// sliderContainer.addEventListener("mouseenter", () => {
//     sliderContainer.style.cursor = "grab";
//     fadeText(pressed);
// });

// sliderContainer.addEventListener("mouseleave", () => {
//     fadeText(pressed);
// })

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
    fadeText(pressed);
});

sliderContainer.addEventListener("mousemove", (e) => {
        if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundary();
});

//-------------Handle Device touch controls------------

sliderContainer.addEventListener("touchstart", (e) => {
    pressed = true;
    startX = e.targetTouches[0].clientX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
    fadeText(pressed);
})

sliderContainer.addEventListener("touchmove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    console.log(e);

    x = e.targetTouches[0].clientX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundary();
    console.log("touch moving", x);
})

sliderContainer.addEventListener("touchend", (e) => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
    console.log("touch end");
    fadeText(pressed);
})