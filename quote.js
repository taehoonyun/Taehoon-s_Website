const quoteTag = document.querySelector("#quote");
const authorTag = document.querySelector("#author");
const imgs = ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"];

const quotes = [
  {
    author: "Moriah Peters Smallbone",
    quote:
      "I think hate is really just a distorted form of hurt, and hurt can often be its own form of love… I needed to be reminded that love isn’t always an overflow of the heart. Sometimes love is a very active and intentional decision",
  },
  {
    author: "Donna and Turner Ward",
    quote:
      "The cancer has been probably one of the greatest gifts of my life. The friendships that I have developed with some breast cancer survivors are priceless. I would not trade those friendships for anything.",
  },
  {
    author: "Amanda Jane Cooper",
    quote:
      "To think there’s a God who sees me and knows me and loves me despite knowing all about me.",
  },
  {
    author: "Paul Goldschmidt",
    quote: "I know I’m making mistakes all the time. That’s why we need Him",
  },
  {
    author: "Doug Bender",
    quote:
      "Everybody has a little bit of loneliness in them. My story is about a lonely kid who found a friend in God",
  },
  {
    author: "Beth Nimmo",
    quote:
      "There are times when I’ll go home and cry. I cried today. I may cry tomorrow. Faith is understanding that God has a purpose in anything he allows into your life",
  },
  {
    author: "Josh Turner",
    quote:
      "There might be something you love to do, whether it’s singing or something completely unrelated. Sometimes you’re just going to have to fight for it. You’re going to have to fight for your job. You’re going to have to fight for your marriage and your home. You’re going to have to fight for your children or anything else that has value",
  },
  {
    author: "TJ Stevens",
    quote:
      "I never imagined in a thousand lifetimes that, my God, you were going to show the world what you can do with a high school shooter",
  },
  {
    author: "Beth Nimmo",
    quote:
      "God doesn’t expect things from us, because without him we can do nothing",
  },
  {
    author: "Doug Bender",
    quote:
      "We have seen him. We have touched him. We have heard his voice. We have found his peace while we wait for the day. Trust Jesus. Choose peace",
  },
];

function getQuote() {
  const i = parseInt(Math.random() * 10);
  // console.log(i);
  quoteTag.innerText = quotes[i].quote;
  authorTag.innerText = "- " + quotes[i].author + " -";
}
getQuote();

function background() {
  const bgImg = document.createElement("img");
  const i = parseInt(Math.random() * imgs.length);
  bgImg.src = `img/${imgs[i]}`;
  document.body.appendChild(bgImg);
  bgImg.style.zIndex = -1;
  bgImg.style.position = "absolute";
  bgImg.style.top = 0;
  bgImg.style.left = 0;
}
background();
// setInterval(background, 30000);
// setInterval(getQuote, 5000);
