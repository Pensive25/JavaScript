let secondElapsed = 0;
let interval = null;
const time = document.getElementById('time');



let padStart = (value) => {

    return String(value).padStart(2, '0');
}

let setTime = () => {

    const minutes = Math.floor(secondElapsed / 60);
    const seconds = secondElapsed % 60;
    time.innerHTML= `${padStart(minutes)}:${padStart(seconds)}`;

}

let timer =() => {
    secondElapsed++;

    setTime();
}

let startTimer = () => {

    if(interval) stopTimer();

    interval = setInterval(timer, 1000);
};
    

let stopTimer = () => {

    clearInterval(interval);

}

let resetTimer = () => {
    
    stopTimer();
    secondElapsed = 0;
    setTime();

};

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
