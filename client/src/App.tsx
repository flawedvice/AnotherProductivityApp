import React from 'react';
import './App.css';
import './styles/css/main.css'

import TaskList from './Components/TasksList';
import TaskCard from './Components/TaskCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDos</h1>
        <main className='main-todo'>
          <TaskList />
          <TaskCard num={1}/>
        </main>
      </header>
    </div>
  );
}

export default App;
