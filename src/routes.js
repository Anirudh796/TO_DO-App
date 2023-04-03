import React from 'react';
import Dashboard from './components/dashboard/Dashboard.js';
import TodoDetails from './components/todo/TodoDetails.js';
import SignIn from './components/auth/SignIn.js';
import Createtodo from './components/todo/Createtodo.js';
import EditTodo from './components/todo/EditTodo.js';
import InvalidPath from './components/invalidPaths/InvalidPath.js';
import Select from './components/todo/Select.js';

export const routes = [
 {
      path:"/",
      element:<Dashboard />,
      exact:true
 },
 {
    path:"/todo/:id",
    element:<TodoDetails />
    
},
{
    path:"/update-task/:id",
    element:<EditTodo />
    
},
{
    path:"/signin",
    element:<SignIn />
    
},
{
    path:"/create-todo-task",
    element:<Createtodo/>
},
{
    path:"/select",
    element:<Select/>
},
{
     path:"*",
     element:<InvalidPath/>  
}
]