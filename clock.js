const clock = document.querySelector("#clock");
const currentDate = document.querySelector("#currentDate");

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const min = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);
  clock.innerText = ` ${hours}:${min}:${second}`;
}
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString().padStart(2, 0);
  const day = date.getDay().toString().padStart(2, 0);
  currentDate.innerHTML = ` ${year}-${month}-${day}`;
}

// console.log(min);
setInterval(getCurrentDate, 1000);
setInterval(getClock, 1000);
