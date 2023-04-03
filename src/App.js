import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar.js'
import { routes } from './routes.js';

function App() {
  

  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
    <Routes>
      { routes.map((route) => {
        return (
          <Route exact={route.exact} path={`${route.path}`} element={route.element} key={route.path}/>
        )
      })}
      {/* <Route exact path='/' element={<Dashboard/>} />
      <Route path='/todo/:id' element={<TodoDetails/>} />
      <Route path='/update-task/:id' element={<EditTodo/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/create-todo-task' element={<Createtodo/>} />
      <Route path='/select' element={<Select/>} />
      <Route path='*' element={<InvalidPath/>} /> */}
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
