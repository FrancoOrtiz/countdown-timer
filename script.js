const $seconds = document.getElementById("seconds");
const $minutes = document.getElementById("minutes");
const $hours = document.getElementById("hours");
const $days = document.getElementById("days");

let secondsTime = 1000;
let minutesTime = secondsTime * 60;
let hoursTime = minutesTime * 60;
let dayTime = hoursTime * 24;

let epicDay = new Date("June 24, 2021");

const interval = setInterval( () => {
    let now = new Date();
    let actualDistant = epicDay - now;
    
    let seconds = Math.floor((actualDistant % minutesTime) / secondsTime);
    let minutes = Math.floor((actualDistant % hoursTime) / minutesTime);
    let hours = Math.floor((actualDistant % dayTime) / hoursTime);
    let day = Math.floor(actualDistant / dayTime);

    $seconds.textContent = seconds;
    $minutes.textContent = minutes;
    $hours.textContent = hours;
    $days.textContent = day;

    if(actualDistant <= 0){
        clearInterval(interval)
    };

},1000);