document.addEventListener("mousemove", function(e) {
    const glass = document.querySelector('.glass');
    glass.style.left = e.offsetX + 'px';
    glass.style.top = e.offsetY + 'px';
})