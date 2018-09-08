var time = 0, timer;

window.onload = function () {
    start();
}

function start() {
    let record = document.getElementById('record_btn');
    let stop = document.getElementById('stop_btn');
    let pause = document.getElementById('pause_btn');
    let play = document.getElementById('play_btn');

    record.onclick = recordClick;
    stop.onclick = stopClick;
    pause.onclick = pauseClick;
    play.onclick = playClick;
}

function recordClick() {
    timer = setInterval(startTimer, 1000);
}

function startTimer() {
    time = time + 1;
    document.getElementById('Time').innerHTML = time + "s";
}

function stopClick() {
    clearInterval(timer);
    document.getElementById('Time').innerHTML = 0 + "s";
}

function pauseClick() {    
    clearInterval(timer);
}

function playClick() {
    timer = setInterval(startTimer, 1000);
}