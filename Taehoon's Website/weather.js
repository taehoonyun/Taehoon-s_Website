const API_KEY = "5fb31fac82bfbf3748c99073796c7d4f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
      console.log(data.weather[0].main);
    });
}
function onGeoError() {
  alert("cant find your location!!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
