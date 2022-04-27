const todoform = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoList = document.querySelector("#todo_list");

const TODOKEY = "todoValue";

let todos = [];

function todoMain(event) {
  event.preventDefault();
  const value = todoInput.value;
  todoInput.value = "";
  const newTodobj = {
    text: value,
    id: Date.now(),
  };
  printTodo(newTodobj);
  todoListInsert(newTodobj);
}

function deleteTodoList(event) {
  const deleteList = event.target.parentElement;
  deleteList.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(deleteList.id));
  setTodo();
}

function printTodo(value) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = value.text;
  li.id = value.id;
  todoList.appendChild(li);
  li.appendChild(span);
  button.innerText = "×";
  li.appendChild(button);
  button.addEventListener("click", deleteTodoList);
}

function todoListInsert(value) {
  todos.push(value);
  setTodo();
}

function setTodo() {
  const todoValue = JSON.stringify(todos);
  localStorage.setItem(TODOKEY, todoValue);
}
const saveTodo = JSON.parse(localStorage.getItem(TODOKEY));

todoform.addEventListener("submit", todoMain);
if (saveTodo !== null) {
  todos = saveTodo;
  saveTodo.forEach((item) => printTodo(item));
}
