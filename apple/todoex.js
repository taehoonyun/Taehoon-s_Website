const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-form input");
const todolist = document.querySelector("#todo-list");

let Todo = [];

function SaveTodo(){
   
    localStorage.setItem('TodoList',JSON.stringify(Todo));
}

function deletTodo(event){
    const targetbtn = event.target.parentElement;
    console.log(targetbtn.id);   
    Todo = Todo.filter((todo) =>todo.id !== parseInt(targetbtn.id));
    console.log(Todo);
    targetbtn.remove();
    SaveTodo();
}

function List(input){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = input.id;
    span.innerText = input.text;
    li.appendChild(span);
    button.innerText = "X";
    li.appendChild(button);
    todolist.appendChild(li);
    button.addEventListener("click",deletTodo);
    
}

function printTodo(event){
    event.preventDefault();
    const NewTodo = todoinput.value;
    const NewTodoObj = {
        id: Date.now(),
        text : NewTodo,

    }
    Todo.push(NewTodoObj);
    SaveTodo();
    List(NewTodoObj);
    todoinput.value="";
    
}
const saveTodo = localStorage.getItem('TodoList');

todoform.addEventListener("submit",printTodo);

if(saveTodo !== null){
    const parseTodo = JSON.parse(saveTodo);
    Todo =parseTodo;
    parseTodo.forEach(List);
}