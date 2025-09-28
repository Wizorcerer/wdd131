
let selectElem = document.getElementById('themeSelector');
let logo = document.querySelector('img');
let subtitle = document.getElementById('subtitle');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add("darkmode");
        subtitle.style.color = "lightblue";
    } else {
        document.body.classList.remove("darkmode");
    }
}