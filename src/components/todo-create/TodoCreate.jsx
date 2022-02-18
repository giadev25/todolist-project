import './TodoCreate.css';
import { useState } from 'react';

const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        props.onCreateTodo(newTodo);

        setInputTodo('');
        // console.log(newTodo);
    }
    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={(e) => {
                setInputTodo(e.target.value)
            }} />
            <button type="submt">Add</button>
        </form>
    )
}

export default TodoCreate;