
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let b = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        b.classList.toggle("darkmode");
    } else {
        document.body.style.background = "white";
    }
}