function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button_start = document.querySelector('button[data-start]');
const button_stop = document.querySelector('button[data-stop]');

let intervalId = null;

button_start.addEventListener('click', () => {
  button_start.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

button_stop.addEventListener('click', () => {
  button_start.removeAttribute('disabled');
  clearInterval(intervalId);
});
