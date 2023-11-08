const image = document.querySelector(".dobby-image");
const daysText = document.querySelector(".day");
const hoursText = document.querySelector(".hour");
const minutesText = document.querySelector(".minute");
const secondsText = document.querySelector(".second");

setTimeout(dobbyIsShown, 2000);

function dobbyIsShown() {
  image.style.visibility = "visible";
}

setInterval(() => {
  const currentTime = Date.now();
  const futureTime = new Date("2023-12-15").getTime();
  const timeLeft = futureTime - currentTime;

  const { days, hours, mins, secs } = getTimeComponents(timeLeft);

  daysText.textContent = days;
  hoursText.textContent = hours;
  minutesText.textContent = mins;
  secondsText.textContent = secs;

  console.log(`${days}:${hours}:${mins}:${secs}`);
}, 1000);

function pad(value) {
  return String(value).padStart(2, "0");
}

function getTimeComponents(time) {
  const days = pad(
    Math.floor((time % (1000 * 60 * 60 * 24 * 60)) / (1000 * 60 * 60 * 24))
  );
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
