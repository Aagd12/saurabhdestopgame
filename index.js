const time = Math.random() + 1.5; // I’m adding .5 here so the flicker isn’t too obnoxious
const left = Math.random() + 2; // I’m adding .5 here so the flicker isn’t too obnoxious

const red = document.querySelector('.duck1');
const red1 = document.querySelector('.duck3');

red.style.setProperty('--animation-time', time + 's');
red1.style.setProperty('--animation-time', time + 's');
