
const refs = {
  days:document.querySelector('.value[data-value="days"]'),
  hours:document.querySelector('.value[data-value="hours"]'),
  mins:document.querySelector('.value[data-value="mins"]'),
  secs:document.querySelector('.value[data-value="secs"]'),
}


class CountdownTimer{
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;

  }

  start(){
     setInterval(() => {
      const date = new Date();
      const time = this.targetDate - date;
      if(time < 0){
        this.stop();
        return
      }
      const countdown = this.getTimeComponents(time);
      this.updateClockFace(countdown);
           
        }),1000
   
  }

  stop(){
     clearInterval(timer);
         
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockFace({days, hours, mins, secs}){
    refs.days.innerHTML =` ${days}`;
    refs.hours.innerHTML = `${hours}`;
    refs.mins.innerHTML =`${mins}`;
    refs.secs.innerHTML = `${secs}`;

  }

  getTimeComponents(time){
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    return {days, hours, mins, secs}
  }
}


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  });
  timer.start()
