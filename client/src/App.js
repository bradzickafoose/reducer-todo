import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Reducer Todo</h1>
      </header>
      <section className='App-section'>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
