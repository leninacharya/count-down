const daysE1 = document.querySelector("#days");
const hoursE1 = document.querySelector("#hours");
const minsE1 = document.querySelector("#mins");
const secondsE1 = document.querySelector("#seconds");

const newYears = "13 Apr 2024";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  //console.log(totalSeconds);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysE1.textContent = days;
  hoursE1.textContent = foramttime(hours);
  minsE1.textContent = foramttime(minutes);
  secondsE1.textContent = foramttime(seconds);

  function foramttime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
//initial call
setInterval(countdown, 1000);
countdown();
