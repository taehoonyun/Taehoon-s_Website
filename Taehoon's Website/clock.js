const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const min = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);
  clock.innerText = ` ${hours}:${min}:${second}`;
}

// console.log(min);

setInterval(getClock, 1000);
