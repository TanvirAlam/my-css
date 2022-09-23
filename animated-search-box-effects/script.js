let search = document.querySelector('.search');
let searchBox = document.querySelector('.searchBox');
let close = document.querySelector('.close');

search.onclick = function() {
    searchBox.classList.toggle('active');
}

close.onclick = function() {
    searchBox.classList.toggle('active');
}