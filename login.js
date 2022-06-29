const login = document.querySelector("#loginform");
const loginBtn = document.querySelector("#login");
const greeting = document.querySelector("#greeting");
const HIDDENCLASS = "hidden";

function onLoginBtnClick(event) {
  event.preventDefault();
  const ID = loginBtn.value;
  console.log(ID);
  localStorage.setItem("ID", ID);
  login.classList.add(HIDDENCLASS);
  paintGreeting(ID);
}
const getID = localStorage.getItem("ID");

function paintGreeting(getID) {
  greeting.classList.remove(HIDDENCLASS);
  greeting.innerHTML = "Hello " + getID + "!!";
}

if (getID !== null) {
  paintGreeting(getID);
} else {
  //   greeting.classList.add(HIDDENCLASS);
  login.classList.remove(HIDDENCLASS);
  login.addEventListener("submit", onLoginBtnClick);
}
