const makeBubble = () => {
  let clutter = "";
  for (i = 1; i <= 126; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pBtm").innerHTML = clutter;
};

const runTimer = () => {
  let timer = 60;
  let setTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementsByClassName("box")[1].innerHTML = timer;
    } else {
      clearInterval(setTimer);
      document.querySelector(
        "#pBtm"
      ).innerHTML = `<h1>Game Over!</h1><br/><h2>Your Score is ${score}</h2>`;
      document.querySelector("#pBtm").style.flexDirection = "column";
      document.querySelector("#pBtm").style.color = "rgb(5, 95, 133)";
      //   document.getElementsByTagName("button").style.display = "block";
    }
  }, 1000);
};
let hitVar;
const getNewHit = () => {
  hitVar = Math.floor(Math.random() * 10);
  document.getElementsByClassName("box")[0].innerHTML = hitVar;
};
document.querySelector("#pBtm").addEventListener("click", (dets) => {
  let x = Number(dets.target.textContent);
  if (x == hitVar) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
let score = 0;
const increaseScore = () => {
  score += 10;
  document.getElementsByClassName("box")[2].innerHTML = score;
};
runTimer();
makeBubble();
getNewHit();
