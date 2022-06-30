const login = document.querySelector("#loginform");
const loginBtn = document.querySelector("#login");
const login_func = document.querySelector("#login_func");
const greeting = document.querySelector("#greeting");
const main_contents = document.querySelector("#main_contents");
const HIDDENCLASS = "hidden";

function onLoginBtnClick(event) {
  event.preventDefault();
  const ID = loginBtn.value;
  console.log(ID);
  localStorage.setItem("ID", ID);
  login_func.classList.add(HIDDENCLASS);
  paintGreeting(ID);
}
const getID = localStorage.getItem("ID");

function paintGreeting(getID) {
  main_contents.classList.remove(HIDDENCLASS);
  greeting.innerHTML = "Hello " + getID + "!!";
}

if (getID !== null) {
  paintGreeting(getID);
} else {
  login_func.classList.remove(HIDDENCLASS);
  login.addEventListener("submit", onLoginBtnClick);
}
