
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
        logo.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-white.png");
    } else {
        document.body.style.background = "white";
    }
}