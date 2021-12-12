
const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife", "pistol"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Sonya",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["knife", "axe"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const arenas = document.querySelector(".arenas");


function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if(className) {
    $tag.classList.add(className);
  }
  
  return $tag;
}

function createPlayer(playerObject) {

  const player = createElement('div', 'player' + playerObject.player);
  const progressbar = createElement('div', 'progressbar');
  const character = createElement('div', 'character');
  const life = createElement('div', 'life');
  const name = createElement('div', 'name');
  const img = createElement('img');


  life.style.width = playerObject.hp + "%";
  name.innerText = playerObject.name;
  img.src = playerObject.img;

  progressbar.appendChild(life);
  progressbar.appendChild(name);

  character.appendChild(img);

  player.appendChild(progressbar);
  player.appendChild(character);
  
  
  
  return player;

}

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));


