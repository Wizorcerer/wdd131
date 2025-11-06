const character = {
    name: 'Gerald', race: 'Grung', level: 2, class: ' Fighter', alignment: 'Neutral Good', maxHealth: 19,
    ac: '11', health: '19', initiative: 1,speed: 20/35, 
    strength: 8, dexterity: 17, constitution: 15, intelligence: 11, wisdom: 13, charisma: 15,
    acrobatics: 3, animal: 1, arcana: 0, athletics: -1, deception: 2, history: 0, insight: 1, intimidation: 2, investigation: 0,
    medicine: 1, nature: 0, perception: 1, performance: 2, Persuasion: 2, religion: 0, sleight: 3, stealth: 3, survival: 1
}

document.querySelector('#class').textContent = character.class;
document.querySelector('#level').textContent = character.level;
document.querySelector('#health').textContent = character.health;
document.querySelector('#strength').textContent = character.strength;
document.querySelector('#dexterity').textContent = character.dexterity;
document.querySelector('#constitution').textContent = character.constitution;
document.querySelector('#intelligence').textContent = character.intelligence;
document.querySelector('#wisdom').textContent = character.wisdom;
document.querySelector('#charisma').textContent = character.charisma;
document.querySelector('#race').textContent = character.race;
document.querySelector('#alignment').textContent = character.alignment;
document.querySelector('#maxHealth').textContent = character.maxHealth;
document.querySelector('#ac').textContent = character.ac;

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