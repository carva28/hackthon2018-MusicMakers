var time = 0, timer, recordValue = 0;

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
    if (recordValue === 0) {
        timer = setInterval(startTimer, 1000);
        recordValue = 1;
    } else if (recordValue === 1) {
        clearInterval(timer);
        recordValue = 0;
    }
}

function startTimer() {
    time = time + 1;
    document.getElementById('Time').innerHTML = time + "s";
}

function playClick() {
    timer = setInterval(startTimer, 1000);
}

function stopClick() {
    if (timer != false) {
        clearInterval(timer);
        timer = false;
        document.getElementById('Time').innerHTML = 0 + "s";
        time = 0;
    }
}

function pauseClick() {
    if (timer != false) {
        clearInterval(timer);
        timer = false;
    }
}
