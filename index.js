// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });


  const targetDate = new Date('Jul 17, 2021')
//   console.log(CountdownTimer)
  
  /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */


/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */


/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */


/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */

// console.log(secs)

// class Timer{

// }


const date = new Date()
console.log(date);

const daysEl = document.querySelector('.value[data-value="days"]');
console.log(daysEl);

const hoursEl = document.querySelector('.value[data-value="hours"]');
console.log(hoursEl);

const minsEl = document.querySelector('.value[data-value="mins"]');
console.log(minsEl);

const secsEl = document.querySelector('.value[data-value="secs"]');
console.log(secsEl);




function start(){
  timer = setInterval(() => {
    const time = Date.parse(targetDate) - Date.parse(new Date());
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
console.log(mins);
const days = Math.floor(time / (1000 * 60 * 60 * 24));

console.log(days)
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours)
    

    console.log(time)
   
    daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secsEl.innerHTML = secs;
     
  }),1000
}

function stop(){
  if(time<0){
    clearInterval(timer)
  }
}

console.log(start())
