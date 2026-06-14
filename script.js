console.log("Script Loaded Successfully");

let todoList = [
    {
        text: "Learn HTML",
        uniqueID:1,
        isChecked: false
    },
    {
        text: "Learn CSS",
        uniqueID:2,
        isChecked: false
    },
    {
        text: "Learn JavaScript",
        uniqueID:3,
        isChecked: false
    }
]


onStatusChange = (checkboxId, labelId) => {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle("checked");
}

onDeleteTodo = (deleteIconContainerId, todoElementId) => {
    let todoItemElement = document.getElementById(todoElementId);
    todoItemElement.remove();
 }

function createAndAppendTodo(todo) {

let todoItemsContainer = document.getElementById("todoItemsContainer");


let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container",'d-flex', 'flex-row', 'align-items-center', 'justify-content-start');
    todoElement.id = `todoItem${todo.uniqueID}`;
    todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
    inputElement.type='checkbox';
    inputElement.id= `checkboxInput${todo.uniqueID}`;
    inputElement.checked = todo.isChecked;
    inputElement.classList.add("checkbox-input");

    inputElement.addEventListener('click', function() {
        onStatusChange(inputElement.id, labelElement.id);
    });
    todoElement.appendChild(inputElement);

let labelContainer = document.createElement('div');
    labelContainer.classList.add("label-container",'d-flex', 'flex-row', 'align-items-center', 'justify-content-start');
    todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
    labelElement.setAttribute('for', `checkboxInput${todo.uniqueID}`);
    labelElement.textContent = todo.text;
    labelElement.id = `labelID${todo.uniqueID}`;
    labelElement.classList.add("checkbox-label");
    labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add("delete-icon-container");
    deleteIconContainer.id = `deleteIconContainer${todo.uniqueID}`;

    deleteIconContainer.addEventListener('click', function() {
        onDeleteTodo(deleteIconContainer.id, todoElement.id);
    });
    labelContainer.appendChild(deleteIconContainer);

let deleteIconElement = document.createElement('i');
    deleteIconElement.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIconElement);

}


for(let todo of todoList) {
    createAndAppendTodo(todo);
}

let onAddButton = document.getElementById("addButton");

onAddButton.addEventListener('click', () =>{
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    
    if(userInputValue === "") {
        alert("Please enter a task!");
        return;
    }

    let newTodo = {
        text: userInputValue,
        uniqueID: todoList.length + 1,
        isChecked: false
    }

    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
})