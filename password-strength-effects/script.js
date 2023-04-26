let password = document.querySelector('#myPass');
let show = document.querySelector('.show');

function Strength(password) {
    let i = 0;
    if (password.length > 6) {
        i++;
    }
    if (password.length >= 10) {
        i++;
    }
    if (/[A-Z]/.test(password)) {
        i++;
    }
    if (/[0-9]/.test(password)) {
        i++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
        i++;
    }
    return i;
}

let container = document.querySelector('.container');
document.addEventListener("keyup", function (e) {
    let strength = Strength(password.value);

    if (strength <= 2) {
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    } else if (strength >= 2 && strength <= 4) {
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    } else {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }
})

show.onclick = function () {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        show.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');

    }
}
