// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const printButton = document.getElementById('print-button');

    taskForm.addEventListener('submit', addTask);
    printButton.addEventListener('click', printTasks);

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function createTaskItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const editBtn = document.createElement('span');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', () => editTask(li));

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => li.remove());

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        return li;
    }

    function editTask(taskItem) {
        const newText = prompt('Edite sua tarefa:', taskItem.firstChild.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskItem.firstChild.textContent = newText.trim();
        }
    }

    function printTasks() {
        window.print();
    }
});
