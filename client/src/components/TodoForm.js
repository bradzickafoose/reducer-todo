import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {

    const [item, setItem] = useState('');

    const handleChanges = e => {
        setItem(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: item,
        });
        setItem('');
    };

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED',
        });
    };

    return (
        <>
            <form onSubmit={submitForm}>
                <div className='input-container'>
                    <label htmlFor='add-todo' hidden>
                        Add Todo
                </label>
                    <input name='add-todo' onChange={handleChanges} value={item} />
                    <button className='btn'>Add Todo</button>
                </div>
                <div className='btn-container'>
                    <button className='btn btn-completed' onClick={clearCompleted}>Clear Completed</button>
                </div>
            </form>
        </>
    );
};

export default TodoForm;
