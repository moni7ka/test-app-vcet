import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ToDoList from './Components/Todolist';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/todolist" element={<ToDoList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;