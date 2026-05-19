const todoList = [];

function keyDownCounter(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
function renderTodoList() {
    let listHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        listHtml += `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="todoList.splice(${i}, 1); renderTodoList();"
        class="delete-todo-button">
        Delete
        </button>`;
    }
    document.querySelector('.todo-display').innerHTML = listHtml;
}
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.duedate-input')

    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    todoList.push({
        name, 
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}




