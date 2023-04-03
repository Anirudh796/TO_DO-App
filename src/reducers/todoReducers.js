const initialState  = {
    token : localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : "",
    todos : localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
}






const todoReducers = (state=initialState,action) => {
     switch(action.type) {
        case "ADD_TOKEN":
           const token = action.token;
            return {
                ...state,
                token:token
            }
        case "ADD_TODO":
            const { id, todo } = action.payload;
            todo.id = id;
            return {
                ...state,
                todos : [...state.todos,todo]

            }
        case "DELETE_TODO":
         const newTodos = state.todos.filter((todo) => todo.id!==action.id);
         return {
            ...state,
            todos:newTodos
         }

        case "REMOVEALL_TODO":
            return {
                token:"",
                todos:[]
            }
        default:
            return state;
     }
     
}


export default todoReducers;