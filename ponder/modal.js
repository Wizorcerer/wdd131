const book = document.querySelector('.book');
const couch = document.querySelector('.couch');
const desk = document.querySelector('.desk');
const keyboard = document.querySelector('.keyboard');
const phone = document.querySelector('.phone');
const sit = document.querySelector('.sit');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const small = document.querySelector('figure');

// Event listener for opening the modal
book.addEventListener('click', openBook)
couch.addEventListener('click', openCouch)
desk.addEventListener('click', openDesk)
keyboard.addEventListener('click', openKeyboard)
phone.addEventListener('click', openPhone)
sit.addEventListener('click', openSit)

function openBook(e) {
    modal.classList.remove('hidden');
    modalImage.setAttribute('src', 'images/book-full.jpg')
}
function openCouch(e) {
    modal.classList.remove('hidden');
    modalImage.setAttribute('src', 'images/couch-full.jpg')
}
function openKeyboard(e) {
    modal.classList.remove('hidden');
    modalImage.setAttribute('src', 'images/keyboard-full.jpg')
}
function openDesk(e) {
    modal.classList.remove('hidden');
    modalImage.setAttribute('src', 'images/desk-full.jpg')
}
function openPhone(e) {
    modal.classList.remove('hidden');
    modalImage.setAttribute('src', 'images/phone-full.jpg')
}
function openSit(e) {
    modal.classList.remove('hidden');
    modalImage.setAttribute('src', 'images/sit-full.jpg')
}


// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});