class CountdownTimer { 
    constructor(timerID) {
    this.selector = timerID;
    this.targetDate = new Date('Feb 05, 2022');
    }
}
const date = new CountdownTimer('#timer-1');
const timerRef = document.querySelector(date.selector)
const dayRef = timerRef.querySelector('[data-value="days"]');
const hoursRef = timerRef.querySelector('[data-value="hours"]');
const minsRef = timerRef.querySelector('[data-value="mins"]');
const secsRef = timerRef.querySelector('[data-value="secs"]');


setInterval(()=>{
    const time = date.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    dayRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
    }, 1000);