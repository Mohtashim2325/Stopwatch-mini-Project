let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displaytime = document.getElementById("displaytime");
let timer = null;

function stopwatch() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        seconds++;
        milliseconds = 0;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? (milliseconds / 10).toString().padStart(2, '0') : milliseconds.toString().padStart(3, '0');

    ms = ms.endsWith('0') ? ms.slice(0, -1) : ms;

    displaytime.innerHTML = h + " : " + m + " : " + s + " : " + ms;
}


function watchstart() {
    document.getElementById("playIcon").style.display = 'none';
    document.getElementById("stopIcon").style.display = 'block';
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);

}

function watchstop() {
    document.getElementById("playIcon").style.display = 'block';
    document.getElementById("stopIcon").style.display = 'none';
    clearInterval(timer);
}

function watchreset() {
    document.getElementById("playIcon").style.display = 'block';
    document.getElementById("stopIcon").style.display = 'none';
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displaytime.innerHTML = "00 : 00 : 00 : 00";
}

