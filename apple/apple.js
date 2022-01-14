const loginForm = document.getElementById("login_form");
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login_form input")

const Greeting = document.getElementById("h22");
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";


function togleFunc(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(username);
    localStorage.setItem(USERNAME_KEY,username);
}

function paintGreeting(username){
    Greeting.classList.remove(HIDDEN_CLASS);
    Greeting.innerText = `hello ${username}`;
}

const SaveLocalItem=localStorage.getItem(USERNAME_KEY);

if(SaveLocalItem === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",togleFunc);
}
else{
    paintGreeting(SaveLocalItem);

}

