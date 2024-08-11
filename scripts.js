const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');

const workButton = document.getElementById('work');
const shortButton = document.getElementById('short-break');
const longButton = document.getElementById('long-break');
const infoButton = document.getElementById('info-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

let isRunning = false;
let timeLeft;
const workTime = 25 * 60;
const shortTime = 5 * 60;
const longTime = 15 * 60;
let currentMode = 'work';
let temp;

function startTimer() {
    if (!isRunning) {
        isRunning = true;

        timeLeft = getTimeForMode(currentMode);
        updateDisplay();

        temp = setInterval(() => {
            timeLeft--;

            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(temp);
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(temp);
    isRunning = false;
}

function resetTimer() {
    clearInterval(temp);
    isRunning = false;
    setMode('work');
}

function getTimeForMode(mode) {
    switch (mode) {
        case 'work':
            return workTime;
        case 'short-break':
            return shortTime;
        case 'long-break':
            return longTime;
        default:
            return workTime;
    }
}

function setMode(mode) {
    currentMode = mode;
    timeLeft = getTimeForMode(mode);
    updateDisplay();
}

function updateDisplay() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;

    seconds.innerHTML = String(sec).padStart(2, '0');
    minutes.innerHTML = String(min).padStart(2, '0');
}

workButton.addEventListener('click', () => setMode('work'));
shortButton.addEventListener('click', () => setMode('short-break'));
longButton.addEventListener('click', () => setMode('long-break'));

// Funções para abrir e fechar o pop-up
infoButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
