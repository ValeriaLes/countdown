const image = document.querySelector(".dobby-image");
const daysText = document.querySelector(".day");
const hoursText = document.querySelector(".hour")
const minutesText = document.querySelector(".minute")
const secondsText = document.querySelector(".second")



setTimeout(dobbyIsShown, 2000);

function dobbyIsShown() {
  image.style.visibility = "visible";
}

const dateNow = new Date();
const dateThen = new Date("2023-12-15");

const timeLeft = dateThen - dateNow;


console.log(new Date(timeLeft).toString())

function msToTime(timeLeft) {
  let seconds = (timeLeft / 1000).toFixed(1);
  let minutes = (timeLeft / (1000 * 60)).toFixed(1);
  let hours = (timeLeft / (1000 * 60 * 60)).toFixed(1);
  let days = (timeLeft / (1000 * 60 * 60 * 24)).toFixed(1);

 
}
msToTime()



// daysText.textContent = days;
//  hoursText.textContent = hours;
//  minutesText.textContent = minutes;
//  secondsText.textContent = seconds;
