/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var pattern = [0, 0, 0, 0, 0, 0, 0, 0];

var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strikes = 0;
function game() {
  if (document.getElementById("StartStop").innerHTML == "Start") {
    document.getElementById("StartStop").innerHTML = "Stop";
    startGame();
  } else {
    document.getElementById("StartStop").innerHTML = "Start";
    stopGame();
  }
}
function loseGame() {
  game();
  alert("Game over. You lost.");
}
function winGame() {
  game();
  alert("Game Over. You won!");
}
function startGame() {
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 5 + 1);
  }
  progress = 0;
  guessCounter = 0;
  strikes = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  playClueSequence();
}
function stopGame() {
  gamePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function guess(btn) {
  console.log("user guess: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] != btn) {
    if (strikes == 2) {
      loseGame();
    } else {
      strikes++;
      alert(strikes + " Strikes");
      playClueSequence();
    }
  } else {
    if (guessCounter == progress) {
      if (guessCounter == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        clueHoldTime = clueHoldTime - 100;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  let delay = nextClueWaitTime;
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple");
  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}
const buttons = document.getElementsByClassName("GameButton");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}

// Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 350,
  3: 400,
  4: 450,
  5: 500,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
