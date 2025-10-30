const image = document.getElementById('content');
const closeButton = document.querySelector('button');
const big = document.querySelector('dialog');

function openBig(e) {
    big.classList.remove('hidden');
}

closeButton.addEventListener('click', () => {
    big.classList.add('hidden');
});

image.addEventListener('click', openBig);