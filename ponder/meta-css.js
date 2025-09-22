const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;

console.log(area)

const one = 1;
const two = '2';

let result = one * two;
console.log(result);

result = one + Number(two);
console.log(result);

let course = "CSE131";
if (true) {
    let student = "John";
    console.log(course);
    console.log(student)
}

console.log(course)
console.log(student)


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})