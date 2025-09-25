let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})

const image = document.querySelector('img');
image.setAttribute('src', 'images/OIP.webp');
image.setAttribute('alt', 'new logo');

document.body.style.backgroundColor = 'lightblue';