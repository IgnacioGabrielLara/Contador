// CRONOMETRO

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const start = document.getElementById("start");
const stops = document.getElementById("stop");
const rese = document.getElementById("reset");

let counterSeconds = 0;
let counterMinutes = 0;
let counterHours = 0;

seconds.innerHTML = counterSeconds;
minutes.innerHTML = counterMinutes;
hours.innerHTML = counterHours;


let flag = 1;

function valores() {

    if (counterSeconds == 59) {
        counterSeconds = -1;
        counterMinutes++;
        minutes.innerHTML = counterMinutes;

    }
    if (counterMinutes == 60) {
        counterMinutes = 0;
        minutes.innerHTML = counterMinutes;
        counterHours++;
        hours.innerHTML = counterHours;
    }



}

function cronometro() {

    if (flag == 0) {

        return;
    } else {
        valores();
        counterSeconds++;
        seconds.innerHTML = counterSeconds;
        setTimeout(cronometro, 1000);

    }


}


start.addEventListener("click", function() {
    flag = 1;
    start.style.display = "none";
    stops.style.display = "inline";

    cronometro();


});

stops.addEventListener("click", function() {

    flag = 0;
    start.style.display = "inline";
    stops.style.display = "none";
    cronometro()

});

rese.addEventListener("click", function() {
    counterSeconds = 0;
    counterMinutes = 0;
    counterHours = 0;

    seconds.innerHTML = counterSeconds;
    minutes.innerHTML = counterMinutes;
    hours.innerHTML = counterHours;
});



// TEMPORIZADOR 

const hoursTempHtml = document.getElementById("hoursTempHtml");
const minutesTempHtml = document.getElementById("minutesTempHtml");
const secondsTempHtml = document.getElementById("secondsTempHtml");
const startTemp = document.getElementById("startTemp");
const stopTemp = document.getElementById("stopTemp");
const resetTemp = document.getElementById("resetTemp");
const renew = document.getElementById("renewTemp");
const sonido = document.getElementById("audio");
counterHoursTemp = 0;
counterMinutesTemp = 0;
counterSecondsTemp = 0;

let flagTemp = 1

function valoresTemp() {

    if (counterSecondsTemp == 0) {

        counterSecondsTemp = 60;
        counterMinutesTemp--;
        minutesTempHtml.innerHTML = counterMinutesTemp;

    }
    if (counterMinutesTemp == 0 && counterHoursTemp > 0) {
        counterMinutesTemp = 59;
        minutesTempHtml.innerHTML = counterMinutesTemp;
        counterHoursTemp--;
        hoursTempHtml.innerHTML = counterHoursTemp;
    }



}

function terminar() {

    if (counterHoursTemp == 0 && counterMinutesTemp == 0 && counterSecondsTemp == 1) {
        flagTemp = 0;
        sonido.play();

    }
}

function temporizador() {



    if (flagTemp == 0) {

        return;
    } else {
        valoresTemp();
        terminar();
        counterSecondsTemp--;
        secondsTempHtml.innerHTML = counterSecondsTemp;
        setTimeout(temporizador, 1000);

    }


}











startTemp.addEventListener("click", function() {

    let secondsTemp = document.getElementById("secondTemp").value;
    let minutesTemp = document.getElementById("minuteTemp").value;
    let hoursTemp = document.getElementById("hourTemp").value;

    startTemp.style.display = "none";
    stopTemp.style.display = "inline";
    resetTemp.style.display = "inline";
    flagTemp = 1;

    if (secondsTemp > 0) { counterSecondsTemp = secondsTemp; }

    if (minutesTemp > 0) { counterMinutesTemp = minutesTemp; }

    if (hoursTemp > 0) { counterHoursTemp = hoursTemp; }


    hoursTempHtml.innerHTML = counterHoursTemp;
    minutesTempHtml.innerHTML = counterMinutesTemp;
    secondsTempHtml.innerHTML = counterSecondsTemp;

    temporizador();


});

stopTemp.addEventListener("click", function() {

    flagTemp = 0;
    renew.style.display = "inline";
    stopTemp.style.display = "none";
    temporizador()

});

renew.addEventListener("click", function() {

    renew.style.display = "none";
    stopTemp.style.display = "inline";
    flagTemp = 1;
    temporizador();
});

resetTemp.addEventListener("click", function() {

    startTemp.style.display = "inline";
    renew.style.display = "none";
    stopTemp.style.display = "none";
    resetTemp.style.display = "none";

    flagTemp = 0;
    counterSecondsTemp = 0;
    counterMinutesTemp = 0;
    counterHoursTemp = 0;

    secondsTempHtml.innerHTML = counterSecondsTemp;
    minutesTempHtml.innerHTML = counterMinutesTemp;
    hoursTempHtml.innerHTML = counterHoursTemp;
});