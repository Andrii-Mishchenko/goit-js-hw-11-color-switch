// import './css/common.css';
import colors from '/colors-array.js'


const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let intervalId = null


startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    intervalId = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        
        body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length)]}`;
        startBtn.setAttribute('disabled', 'disabled');
    }, 1000)
}

function onStopBtnClick() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled');
}
