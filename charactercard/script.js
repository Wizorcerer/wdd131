const character = {
    name: 'Gerald', 
    class: 'Fighter',
    maxHealth: 19, 
    health: '19', 
    level: 2, 
}

document.querySelector('#class').textContent = character.class;
document.querySelector('#level').textContent = character.level;
document.querySelector('#health').textContent = character.health;

function levelUp() {
    character.level += 1;
    document.querySelector('#level').textContent = character.level;
    character.maxHealth += 4;
    character.health = character.maxHealth;
    document.querySelector('#health').textContent = character.health;
}

const button = document.getElementById('leveling');
button.addEventListener('click', levelUp);

function attacked() {
    character.health -= 3;
    document.querySelector('#health').textContent = character.health;
    if (character.health <= 0){
    alert('You are dead!');
    character.health = 0;
    };
}

const button2 = document.getElementById('damaging');
button2.addEventListener('click', attacked);

function longRest() {
    character.health = character.maxHealth;
    document.querySelector('#health').textContent = character.health;
}

const button3 = document.getElementById('resting');
button3.addEventListener('click', longRest);

console.log(character.level);