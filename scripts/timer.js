export let hour = Number(localStorage.getItem('hour')) || 0;
export let minute = Number(localStorage.getItem('minute')) || 0;
export let second = Number(localStorage.getItem('second')) || 0;
let hourString = '00';
let minuteString = '00';
let secondString = '00';
let time;

export function changeTime() {

  setInterval(() => {
    second++;

    if (second === 60) {
      second = 0;
      minute++;
    }

    if (second < 10) {
      secondString = `0${second}`;
    } else {
      secondString = `${second}`;
    }

    if (minute === 60) {
      minute = 0;
      hour++;
    }

    if (minute <= 10) {
      minuteString = `0${minute}`;
    } else {
      minuteString = `${minute}`;
    }

    time = `${minuteString}:${secondString}`;

    document.querySelector('.timer')
    .innerHTML = time;

    saveToLocalStorage();
  }, 1000);
  
}

function saveToLocalStorage(){
  localStorage.setItem('hour', String(hour));
  localStorage.setItem('minute', String(minute));
  localStorage.setItem('second', String(second));
}

export function removeTimer(){
  localStorage.removeItem('hour');
  localStorage.removeItem('minute');
  localStorage.removeItem('second');
}