function getChrono(date, text) {
  const now = new Date().getTime();
  const countdownDate = new Date(date).getTime();
  const distanceBase = countdownDate - now;
  
   if (distanceBase <= 0) {
    clearInterval(countdownInterval);
    text.innerText = "Time is over !"
    return;
  }

  const daysInMilli = 1000 * 60 * 60 * 24;
  const hoursInMilli = 1000 * 60 * 60;
  const minutesInMilli = 1000 * 60;
  const secondsInMilli = 1000;

  const days = Math.floor(distanceBase / daysInMilli);
  const hours = Math.floor((distanceBase % daysInMilli) / hoursInMilli);
  const minutes = Math.floor((distanceBase % hoursInMilli) / minutesInMilli);
  const seconds = Math.floor((distanceBase % minutesInMilli) / secondsInMilli);

  text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`; 
}

const text = document.querySelector("h1");
const date = "May 1, 2021";

const countdownInterval = setInterval(getChrono, 1000, date, text);
