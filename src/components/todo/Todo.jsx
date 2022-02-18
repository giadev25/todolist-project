import './Todo.css';
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import { useState } from 'react';

const Todo = () => {
    const [getTodos, setTodos] = useState([
        {id: 1, title: 'eat'},
        {id: 2, title: 'sleep'},
        {id: 3, title: 'Code'},
    ]);

    function eventCreateTodo(todo){
        setTodos(getTodos.concat(todo))
        console.log(getTodos);
    }

    return(
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
        </div>
    );
}

export default Todo;