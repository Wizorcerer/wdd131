
let selectElem = document.getElementById('themeSelector');
let logo = document.querySelector('img');
let subtitle = document.getElementById('subtitle');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add("darkmode");
        subtitle.style.color = "lightblue";
        logo.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-white.png");
    } else {
        document.body.classList.remove("darkmode");
        subtitle.style.color = "#035f9c";
    }
}