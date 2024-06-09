const todos = {
    "results": [
        {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
        },
        {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
        },
        {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
        },
        {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
        }
    ]
};


localStorage.setItem('todos', JSON.stringify(todos));

const storedTodos = localStorage.getItem('todos');
const parsedTodos = JSON.parse(storedTodos);
const tableBody = document.getElementById("tableBody");

const tableRows = parsedTodos.results.map(todo => {
    return `
        <tr>
            <td>${todo.title}</td>
            <td>${todo.priority}</td>
            <td>${todo.isDone ? 'Yes' : 'No'}</td>
        </tr>
    `;
}).join('');

tableBody.innerHTML = tableRows;