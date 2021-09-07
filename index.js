const body = document.querySelector('body');
const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let TimerID = null;

const colorsLength = colors.length - 1;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

start.addEventListener("click", onStartButtonClick);
stop.addEventListener("click", onStopButtonClick);


function onStartButtonClick(e) {
  TimerID = setInterval(startSwitchColor, 1000,)
};

function startSwitchColor() {
  let randomNumber = randomIntegerFromInterval(0, colorsLength);
  start.setAttribute('disabled', true);
  return body.style.background = `${colors[randomNumber]}`;

};

function onStopButtonClick(e) {
  clearInterval(TimerID);
  start.removeAttribute('disabled', true);
  start.setAttribute('enabled', true);
};

