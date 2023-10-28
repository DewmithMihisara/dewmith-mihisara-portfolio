window.addEventListener('load', function () {
    let ldr = document.querySelector('#loader');

    if (ldr) {
        ldr.style.transition = 'opacity 1s';
        ldr.style.opacity = '0';
        ldr.style.zIndex = '-1';
    }
});