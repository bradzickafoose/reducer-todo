import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      <h2>My Todos</h2>
      <ul className='todo-list'>
        {state.map(todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
