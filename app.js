(function () {
  const homeScoreEl = document.getElementById("homeScore");
  const guestScoreEl = document.getElementById("guestScore");

  let homeScore = 0;
  let guestScore = 0;

  function updateScore(element, score) {
    element.textContent = score;
  }

  document.getElementById("homeAdd1").addEventListener("click", () => {
    homeScore += 1;
    updateScore(homeScoreEl, homeScore);
  });

  document.getElementById("homeAdd2").addEventListener("click", () => {
    homeScore += 2;
    updateScore(homeScoreEl, homeScore);
  });

  document.getElementById("homeAdd3").addEventListener("click", () => {
    homeScore += 3;
    updateScore(homeScoreEl, homeScore);
  });

  document.getElementById("guestAdd1").addEventListener("click", () => {
    guestScore += 1;
    updateScore(guestScoreEl, guestScore);
  });

  document.getElementById("guestAdd2").addEventListener("click", () => {
    guestScore += 2;
    updateScore(guestScoreEl, guestScore);
  });

  document.getElementById("guestAdd3").addEventListener("click", () => {
    guestScore += 3;
    updateScore(guestScoreEl, guestScore);
  });
})();
