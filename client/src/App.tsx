import React from 'react';
import './App.css';
import './styles/css/main.css'

import TaskList from './Components/TasksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!</h1>
        <TaskList />
      </header>
    </div>
  );
}

export default App;
