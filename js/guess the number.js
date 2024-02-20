"use strict";

let score = 20;
let high_score = document.querySelector(".player_highscore").textContent;
let number = Math.trunc(Math.random() * 20) + 1;

document.querySelector("#submit").addEventListener("click", function () {
  const guess = document.querySelector("#guess").value;

  console.log(guess);
  if (!guess) {
    document.querySelector(".player-details_text").textContent =
      "No guess available";
  } else if (guess == number) {
    document.querySelector(".secret-number").textContent = number;

    document.querySelector(".player-details_text").textContent =
      "Correct Number";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".secret-number").style.width = "30rem";

    if (high_score < score)
      document.querySelector(".player_highscore").textContent = score;
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".player-details_text").textContent = "Too low";

      score--;

      document.querySelector(".playerscore").textContent = score;
    } else {
      document.querySelector(".player-details_text").textContent = "You lost";

      document.querySelector(".playerscore").textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".player-details_text").textContent = "Too High";

      score--;

      document.querySelector(".playerscore").textContent = score;
    } else {
      document.querySelector(".player-details_text").textContent = "You lost";

      document.querySelector(".playerscore").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".playerscore").textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".player-details_text").textContent = "Start Guessing";
  document.querySelector("#guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".secret-number").style.width = "15rem";
  document.querySelector(".secret-number").textContent = "?";
});
