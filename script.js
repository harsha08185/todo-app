console.log("Script Loaded Successfully");

let todoList = [
    {
        text: "Learn HTML",
        todoID:1
    },
    {
        text: "Learn CSS",
        todoID:2
    },
    {
        text: "Learn JavaScript",
        todoID:3
    }
]


function createAndAppendTodo(todo) {

let todoItemsContainer = document.getElementById("todoItemsContainer");


let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container",'d-flex', 'flex-row', 'align-items-center', 'justify-content-start');
    todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
    inputElement.type='checkbox';
    inputElement.id= `checkboxInput${todo.todoID}`;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

let labelContainer = document.createElement('div');
    labelContainer.classList.add("label-container",'d-flex', 'flex-row', 'align-items-center', 'justify-content-start');
    todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
    labelElement.setAttribute('for', `checkboxInput${todo.todoID}`);
    labelElement.textContent = todo.text;
    labelElement.id = todo.todoID;
    labelElement.classList.add("checkbox-label");
    labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

let deleteIconElement = document.createElement('i');
    deleteIconElement.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIconElement);

}


for(let todo of todoList) {
    createAndAppendTodo(todo);
}