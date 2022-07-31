'use strict'


let hourElement = document.querySelector('.hour')
let minuteElement = document.querySelector('.minute')
let secElement = document.querySelector('.sec')
let milsElement = document.querySelector('.mils')

let btns = document.querySelector('.buttons')
let startBtn = document.querySelector('.start')
let pauseBtn = document.querySelector('.pause')
let resetBtn = document.querySelector('.reset')


let hour = localStorage.getItem('hour'),
    minute = localStorage.getItem('min'),
    second = localStorage.getItem('sec'),
    mlsecond = localStorage.getItem('mlsec'),
    interval;




btns.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.start')) {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)

    } else if (target.closest('.pause')) {
        clearInterval(interval);
    } else if (target.closest('.reset')) {
        clearInterval(interval);
        hour = '00'
        minute = '00'
        second = '00'
        mlsecond = '00'

        hourElement.innerText = hour;
        secElement.innerText = second;
        milsElement.innerText = mlsecond;
        minuteElement.innerText = minute;

        localStorage.setItem('mlsec', milsElement.innerText)
        localStorage.setItem('sec', secElement.innerText)
        localStorage.setItem('hour', hourElement.innerText)
        localStorage.setItem('min', minuteElement.innerText)



    }
})



function startTimer() {

    mlsecond++;
    if (mlsecond <= 9) {
        milsElement.innerText = '0' + mlsecond;
        localStorage.setItem('mlsec', milsElement.innerText)


    }

    if ((mlsecond > 9) && (mlsecond != 100)) {
        milsElement.innerText = mlsecond;
        localStorage.setItem('mlsec', milsElement.innerText)

    }

    if (mlsecond >= 100) {
        mlsecond = 0;
        second++;
        secElement.innerText = '0' + second;
        milsElement.innerText = '0' + mlsecond;

        localStorage.setItem('mlsec', milsElement.innerText)
        localStorage.setItem('sec', secElement.innerText)
    }


    if (second > 9) {
        secElement.innerText = second;
        localStorage.setItem('sec', secElement.innerText)
    }

    if (second >= 60) {
        second = 0;
        minute++;
        minuteElement.innerText = '0' + minute;
        secElement.innerText = '0' + second;

        localStorage.setItem('sec', secElement.innerText)
        localStorage.setItem('min', minuteElement.innerText)
    }

    if (minute > 9) {
        minuteElement.innerText = minute;
        localStorage.setItem('min', minuteElement.innerText)
    }

    if (minute >= 60) {
        minute = 0;
        hour++;
        hourElement.innerText = '0' + hour;
        minuteElement.innerText = '0' + minute;

        localStorage.setItem('min', minuteElement.innerText)
        localStorage.setItem('hour', hourElement.innerText)
    }

    if (hour > 9) {
        hourElement.innerText = hour;
        localStorage.setItem('hour', hourElement.innerText)
    }

    if (hour >= 24) {
        hourElement.innerText = '0' + hour;
        secElement.innerText = '0' + second;
        milsElement.innerText = '0' + mlsecond;
        minuteElement.innerText = '0' + minute;
    }

}


hourElement.innerText = localStorage.getItem('hour');
secElement.innerText = localStorage.getItem('sec');
milsElement.innerText = localStorage.getItem('mlsec');
minuteElement.innerText = localStorage.getItem('min');