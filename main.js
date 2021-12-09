const player1 = {
  name: "scorpion",
  hp: 100,
  img: "",
  weapon: ["knife", "pistol"],
  attack: function () {
    this.name + " Fight...";
  },
};

const player2 = {
  name: "sonya",
  hp: 100,
  img: "",
  weapon: ["knife", "axe"],
  attack: function () {
    this.name + " Fight...";
  },
};

function createPlayer() {
    const player1 = document.createElement('div');
    player1.classList.add('player1');

    const progressbar = docunent.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    player1.appendChild(progressbar);
    player1.appendChild(character);
}