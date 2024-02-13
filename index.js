// todo object - { title: string, completed: boolean }
const todos = [];

const addTodo = () => {
    // select the input element
    const inputTodoElement = document.querySelector('#inputTodo');

    // select the input's value
    const title = inputTodoElement.value;

    // if the key and value are the same, not need to repeat, aka use "title" to repleace "title: title"
    todos.push({ title, completed: false })
    renderTodos()
    inputTodoElement.value = "";
    console.log(todos)
}

const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
}

const toggleTodo = (index) => {   
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

const renderTodos = () => {
    const todoListElement = document.querySelector('#todoList');
    todoListElement.innerHTML = "";

    todos.forEach((todo, index) => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `
            <p>${todo.title}</p>
            <p>${todo.completed ? "Completed" : "Pending"}</p>
            <div>
                <button onClick='deleteTodo(${index})'>Delete</button>
                <button onClick='toggleTodo(${index})'>Toggle</button>
            </div>
        `;
        todoListElement.appendChild(listElement)
    })
    console.log(todoListElement)
}
renderTodos()


// 3. check if there is an value
// 4. if there is a value, create a new task

//PATH