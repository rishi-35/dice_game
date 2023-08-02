const score0el = document.querySelector("#score--0");
const score1el = document.querySelector("#score--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
let roll_dice = document.querySelector(".btn--roll");
const ap = document.querySelector(".player--active");
let hold = document.querySelector(".btn--hold");
const newgame = document.querySelector(".btn--new");
// const btnn = document.querySelector(".btn");
let gs_0 = 0;
let gs_1 = 0;
let score1 = 0;
let score0 = 0;
playing = true;
// setting css to default
score0el.textContent = 0;
score1el.textContent = 0;
dice.classList.add("hidden");

//   changing player function
function change_player() {
  score0 = 0;
  score1 = 0;
  current0.textContent = score0;
  current1.textContent = score1;
  if (player0.classList.contains("player--active")) {
    player1.classList.add("player--active");
    player0.classList.remove("player--active");
  } else {
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
  }
}
// rolling the dice
roll_dice.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  console.log(randomNum);
  dice.classList.remove("hidden");
  dice.src = `dice-${randomNum}.png`;
  playing = true;
  //   code starts Here
  if (randomNum === 1) {
    change_player();
  } else {
    if (player0.classList.contains("player--active")) {
      score0 += randomNum;
      current0.textContent = score0;
    } else {
      score1 += randomNum;
      current1.textContent = score1;
    }
  }
});
hold.addEventListener("click", function () {
  if (player0.classList.contains("player--active")) {
    gs_0 += score0;
    score0el.textContent = gs_0;
  } else {
    gs_1 += score1;
    score1el.textContent = gs_1;
  }
  change_player();
  if (gs_0 >= 20 || gs_1 >= 20) {
    roll_dice.disabled = true;
    hold.disabled = true;
    console.log("inside the winner");
    if (gs_0 > gs_1) {
      player0.classList.add("player--winner");
    } else {
      player1.classList.add("player--winner");
    }
  }
});
newgame.addEventListener("click", function () {
  if (gs_0 > gs_1) {
    player0.classList.remove("player--winner");
  } else {
    player1.classList.remove("player--winner");
  }
  score0 = 0;
  score1 = 0;
  gs_0 = 0;
  gs_1 = 0;
  hold.disabled = false;
  roll_dice.disabled = false;
  score0el.textContent = 0;
  score1el.textContent = 0;
  dice.classList.add("hidden");
});
