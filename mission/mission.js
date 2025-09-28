
let selectElem = document.getElementById('themeSelector');
let logo = document.querySelector('img');
let b = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add("darkmode");
    } else {
        document.body.classList.remove("darkmode");
    }
}