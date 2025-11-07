const characters = [
    {
        image: "images/Gerald.webp",
        name: 'Gerald the Inevitable', race: 'Grung', level: 2, class: ' Fighter', alignment: 'Neutral Good', maxHealth: 19,
        ac: '11', health: '19', initiative: 1,speed: 20/35, 
        strength: 8, dexterity: 17, constitution: 15, intelligence: 11, wisdom: 13, charisma: 15,
        acrobatics: 3, animal: 1, arcana: 0, athletics: -1, deception: 2, history: 0, insight: 1, intimidation: 2, investigation: 0,
        medicine: 1, nature: 0, perception: 1, performance: 2, Persuasion: 2, religion: 0, sleight: 3, stealth: 3, survival: 1
    },
    {
        image: "images/Illvenator-Sh'var.png",
        name: 'Yorrim Grimm', race: 'Human', level: 1, class: ' Warlock', alignment: 'Neutral', maxHealth: 10,
        ac: '14', health: '10', initiative: 3,speed: 30, 
        strength: 8, dexterity: 16, constitution: 14, intelligence: 15, wisdom: 10, charisma: 11,
        acrobatics: 3, animal: 0, arcana: 2, athletics: -1, deception: 0, history: 2, insight: 0, intimidation: 0, investigation: 2,
        medicine: 0, nature: 2, perception: 0, performance: 0, Persuasion: 0, religion: 2, sleight: 3, stealth: 3, survival: 0
    }
]

let characterList = document.getElementById('character-list');

    characters.forEach(character => {
        let html = `<div class="card">
            <img class="image" src=${character.image}>
            <h2 class="name">${character.name}</h2>
            <div class="info">
                <p><strong>Race: </strong><span id="race">${character.race}</span><p>
                <p id="class"><strong>Class: Lv</strong><span id="level">${character.level}${character.class}</span><p>
                <p id="alignment"><strong>Alignment: </strong><span id="alignment"">${character.alignment}</span><p>
                <p id="maxHealth"><strong>Max Health: </strong><span id="maxHealth">${character.maxHealth}</span><p>
            </div>
            <div class="stats">
                <p><strong>Str: </strong><span id="strength"">${character.strength}</span><p>
                <p id="dexterity"><strong>Dex: </strong><span>${character.dexterity}</span><p>
                <p id="constitution"><strong>Con: </strong><span>${character.constitution}</span><p>
                <p id="intelligence"><strong>Int: </strong><span>${character.intelligence}</span><p>
                <p id="wisdom"><strong>Wis: </strong><span>${character.wisdom}</span><p>
                <p id="charisma"><strong>Cha: </strong><span>${character.charisma}</span><p>
            </div>
            <button id="damaging" class="buttons">Damaged</button>
            <button id="leveling" class="buttons">Level Up</button>
            <button id="resting" class="buttons">Long Rest</button>
        </div>
        <div class="secondary">
            <div id="top">
                <img id="shield" src="images/Shield-removebg-preview.png">
                <img id="heart" src="images/heart-removebg-preview.png">
                <p id="armorClass" class="smstat"><strong>AC</strong><span id="ac">${character.ac}</span><p>
                <p id="hp" class="smstat"><strong>Health</strong><span id="health">${character.health}</span><p>
            </div>
            <div id="other">
                <h2>Equipped</h2>
                <h2>Unequipped</h2>
                <h2>Feats, Proficiencies, and Languages</h2>
            </div>
            <div id="skills">
                <p><strong>Acrobatics: </strong><span id="acrobatics"></span></p>
                <p><strong>Animal Handling: </strong><span id="animal"></span></p>
                <p><strong>Arcana: </strong><span id="arcana"></span></p>
                <p><strong>Athletics: </strong><span id="athletics"></span></p>
                <p><strong>Deception: </strong><span id="deception"></span></p>
                <p><strong>History: </strong><span id="history"></span></p>
                <p><strong>Insight: </strong><span id="insight"></span></p>
                <p><strong>Intimidation: </strong><span id="intimidation"></span></p>
                <p><strong>Investigation: </strong><span id="investigation"></span></p>
                <p><strong>Medicine: </strong><span id="medicine"></span></p>
                <p><strong>Nature: </strong><span id="nature"></span></p>
                <p><strong>Perception: </strong><span id="perception"></span></p>
                <p><strong>Performance: </strong><span id="performance"></span></p>
                <p><strong>Persuasion: </strong><span id="persuasion"></span></p>
                <p><strong>Religion: </strong><span id="religion"></span></p>
                <p><strong>Sleight of Hand: </strong id="sleight"><span></span></p>
                <p><strong>Stealth: </strong><span id="stealth"></span></p>
                <p><strong>Survival: </strong><span id="survival"></span></p>
            </div>
        </div>
        `;
        characterList.innerHTML += html;
    });

function levelUp() {
    characters.level += 1;
    document.querySelector('#level').textContent = character.level;
    characters.maxHealth += 4;
    characters.health = character.maxHealth;
    document.querySelector('#health').textContent = character.health;
}

const button = document.getElementById('leveling');
button.addEventListener('click', levelUp);

function attacked() {
    characters.health -= 3;
    document.querySelector('#health').textContent = character.health;
    if (characters.health <= 0){
    alert('You are dead!');
    };
}

const button2 = document.getElementById('damaging');
button2.addEventListener('click', attacked);

function longRest() {
    characters.health = characters.maxHealth;
    document.querySelector('#health').textContent = characters.health;
}

const button3 = document.getElementById('resting');
button3.addEventListener('click', longRest);

