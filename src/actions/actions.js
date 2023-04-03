export const addTodo = (todo) => {
    const localStorage_todos = localStorage.getItem('todos') 
    ? JSON.parse(localStorage.getItem('todos'))
    : [];
    const id = new Date().getTime().toString()
    const newTodo = todo;
    newTodo.id=id;
    localStorage_todos.push(newTodo);
    localStorage.setItem('todos',JSON.stringify(localStorage_todos));
    return {
        type: "ADD_TODO",
        payload:{
            id: id, 
            todo: todo
        }
    }
}

export const addEditTodo = (todo,id) => {
    const localStorage_todos = JSON.parse(localStorage.getItem('todos'));
    const newTodos = localStorage_todos.filter(todo => todo.id!==id);
    const newTodo = todo;
    newTodo.id = id;
    newTodos.push(newTodo);
    localStorage.setItem('todos',JSON.stringify(newTodos));
    return {
        type: "ADD_TODO",
        payload:{
            id: id, 
            todo: todo
        }
    }
}

export const addToken = (token) => {
    localStorage.setItem('token',JSON.stringify(token));
    return {
        type: "ADD_TOKEN",
        token: token
    }
}

export const deleteTodo = (id) => {
    const localStorage_todos = JSON.parse(localStorage.getItem('todos'));
    const newTodos = localStorage_todos.filter(todo => todo.id!==id);
    localStorage.setItem('todos',JSON.stringify(newTodos));
    return {
        type: "DELETE_TODO",
        id:id
    }
} 


export const removeTodo = () => {
    const newTodos = [];
    localStorage.setItem('todos',JSON.stringify(newTodos));
    return {
        type: "REMOVEALL_TODO"
    }
}