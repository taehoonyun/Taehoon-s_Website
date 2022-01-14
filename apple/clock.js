const clock = document.querySelector("#clock");


function getClock() {
    
    const day = new Date()
    const second = String(day.getSeconds()).padStart(2,"0");
    clock.innerText= `${day.getHours()}:${day.getMinutes()}:${second}`
}

getClock();
setInterval(getClock,1000);