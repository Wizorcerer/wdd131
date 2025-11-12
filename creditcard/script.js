const num = document.querySelector('#number');
const hold = document.querySelector('#holder');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const submit = document.querySelector('#submit');

submit.addEventListener('click', check);

function check (event) {if (num.value === "1234123412341234") {
    const numMonth = parseInt(month.value);
    const numYear = parseInt(year.value);

    if (numYear > 25) {
        alert('success!')
    } else if (year === 25) {
        if (numMonth > 10) {
            alert('success')
        } else {
            alert('failed')
        }
    }else {
        alert('failed')
    }
} else {
    alert('failed');
}}