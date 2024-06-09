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

parsedTodos.results.forEach(todo => {
    console.log(todo.title);
});