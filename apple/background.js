const images = ["01.jpg","02.jpg","03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src =`img/${chosenImage}`;

document.body.appendChild(bgImg);