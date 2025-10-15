const book = document.querySelector('.book');
const couch = document.querySelector('.couch');
const desk = document.querySelector('.desk');
const keyboard = document.querySelector('.keyboard');
const phone = document.querySelector('.phone');
const sit = document.querySelector('.sit');
const big = document.getElementById('big');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
book.addEventListener('click', openModal, big.setAttribute('src', 'images/book-full.jpg'));
couch.addEventListener('click', openModal, big.setAttribute('src', 'images/couch-full.jpg'));
desk.addEventListener('click', openModal, big.setAttribute('src', 'images/desk-full.jpg'));
keyboard.addEventListener('click', openModal, big.setAttribute('src', 'images/desk-full.jpg'));
phone.addEventListener('click', openModal, big.setAttribute('src', 'images/desk-full.jpg'));
sit.addEventListener('click', openModal, big.setAttribute('src', 'images/desk-full.jpg'));

function openModal(e) {
    modal.classList.remove('hidden');
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

modalImage.addEventListener('click');{
    
};