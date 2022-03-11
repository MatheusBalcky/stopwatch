let secs = 0;
let mins = 0;
let hrs = 0;
var isActivated = false;
var secscounter;


function counterSecs() {
    secs++;
    if (secs > 60) {
        mins++;
        secs = 0;
    }
    if (mins > 60) {
        hrs++;
        mins = 0
    }
    document.getElementById("digitsWatch").innerText = zeroAhead(hrs) + ":"+ zeroAhead(mins) + ":" + zeroAhead(secs);
}
function start() {
    if (!isActivated) {
        secscounter = setInterval(counterSecs, 1000);
    }
    isActivated = true;
}
function pause() {
    clearInterval(secscounter);
    isActivated = false;
}
function reset() {
    clearInterval(secscounter);
    window.alert("You sttoped the stopwatch at: " + zeroAhead(hrs) + ":" + zeroAhead(mins) + ":" + zeroAhead(secs));
    secs = 0;
    mins = 0;
    hrs = 0;
    document.getElementById("digitsWatch").innerText = "00:00:00";
    isActivated = false;
}
function zeroAhead(digit) {
    if (digit < 10) {
        digit = "0" + digit;
    } 
    return digit;
}