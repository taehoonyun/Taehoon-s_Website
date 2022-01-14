const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
const NEWTODO = "newTodo";
let Todo =[];

function deletToDo(event){
    const li = event.target.parentElement;
    // console.log(event);
    li.remove();
    Todo= Todo.filter((todo)=> todo.id !== parseInt(li.id));
    SaveTodo();
    
}

function SaveTodo(){
    localStorage.setItem(NEWTODO,JSON.stringify(Todo));
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    li.id = newTodoObj.id;
    button.addEventListener("click",deletToDo);
    span.innerText = newTodoObj.text;
    toDoList.appendChild(li);
   
   
}
const SaveTodoItem = localStorage.getItem(NEWTODO);

function handleToDoSubmit(event){
 event.preventDefault();
 const newTodo =toDoInput.value;
 const newTodoObj={
     text:newTodo,
     id:Date.now()};
 toDoInput.value="";
 paintToDo(newTodoObj);
 Todo.push(newTodoObj);
 SaveTodo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

if(SaveTodoItem !== null){
    const ParseTodo = JSON.parse(SaveTodoItem);
    Todo = ParseTodo;
    ParseTodo.forEach(paintToDo);
}