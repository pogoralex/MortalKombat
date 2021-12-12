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



function createPlayer(playerClass, playerObject) {
    const player = document.createElement('div');
    player.classList.add(playerClass);

    const arenas = document.querySelector(".arenas");
    arenas.appendChild(player);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    const life = document.createElement("div");
    life.classList.add("life");
    life.style.width = playerObject.hp + "%"; 

    const name = document.createElement("div");
    name.classList.add("name");
    name.innerText = playerObject.name;

    const img = document.createElement("img");
    img.src = playerObject.img;

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);


}

createPlayer('player1', player1);
createPlayer('player2', player2);
