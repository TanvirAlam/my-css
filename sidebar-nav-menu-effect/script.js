const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink))