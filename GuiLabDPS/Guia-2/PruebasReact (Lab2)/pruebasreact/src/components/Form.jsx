import React, { useState } from 'react'
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({}) //El nuevo input en todo
    const [todos, setTodos] = useState([ //Los inputs ya inscritos en la lista
        { todo: 'todo1', cantidad: '0' },
        { todo: 'todo2', cantidad: '1' },
        { todo: 'todo3', cantidad: '2' }
    ])

    const handleChange = e => setTodo({ ...todo, [e.target.name]: e.target.value })

    const handelClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '' || isNaN(todo.cantidad)) { //Evaluando que los campos no esten vacios y la cantidad no sea un numero
            alert('el campo de tarea no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }


    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar Tarea</label>
                <br /><br />
                <label>Objeto:</label>
                <input type="text" name="todo" onChange={handleChange} />
                <label>Cantidad:</label>
                <input type="text" name="cantidad" onChange={handleChange} />
                <button onClick={handelClick}>Agregar</button>
            </form>
            <br />
            {todos.map((value, index) => (
                //Componente variableTodo variableCantidad variableIndex
                <Todo todo={value.todo} cantidad={value.cantidad} index={index} key={index} deleteTodo={deleteTodo} />
            ))
            }
        </>
    )
}
export default Form