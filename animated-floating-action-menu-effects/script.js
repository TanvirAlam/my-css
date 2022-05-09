const menu_toggle = document.querySelector('.menu_toggle');
const navigation = document.querySelector('.navigation');

menu_toggle.onclick = function () {
    navigation.classList.toggle('active');
}