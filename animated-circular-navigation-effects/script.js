let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = () => {
    menu.classList.add('active');
    toggle.classList.add('active');
}

const list = document.querySelectorAll('li');
 function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active')
 }
list.forEach((item) => item.addEventListener('click', activeLink))