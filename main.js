const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife", "pistol"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const player2 = {
  name: "Sonya",
  hp: 90,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["knife", "axe"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

function createPlayer(player, object) {
    let player = document.createElement('div');
    player.classList.add('player');
    document.querySelector('.arenas').appendChild(player)

    let progressbar = docunent.createElement('div');
    progressbar.classList.add('progressbar');

    let character = document.createElement('div');
    character.classList.add('character');

    player.appendChild(progressbar);
    player.appendChild(character);

    let life = document.createElement('div');
    life.classList.add('life');
    life.style.width = object.hp + '%'; 

    let name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = object.name;

    let img = document.createElement('img');
    img.src = object.img;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    character.appendChild(img);

}

createPlayer('player1', player1);
createPlayer('player2', player2);
