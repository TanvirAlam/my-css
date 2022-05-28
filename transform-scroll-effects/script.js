const SkewedOne =  document.querySelector('.skewedOne')
const SkewedTwo =  document.querySelector('.skewedTwo')

window.addEventListener('scroll', function() {
    const value1 = -15 + window.scrollY / 45;
    const value2 = 15 + window.scrollY / -45;
    SkewedOne.style.transform = "skewY(" + value1 + "deg)";
    SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
})