import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { TodoForm, TodoItem } from './components/TodoForm'
import { TodoProvider } from './context'

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((previous) => [{id: Date.now(), ...todo}, ...previous])
    }

    const updateTodo = (id, todo) =>{
        setTodos((previous) => 
                            previous.map((previousTodo) => 
                            (previousTodo.id === id ? 
                            todo : 
                            previousTodo)))

        /**
         *  It can be written as
         *  setTodos((previous) =>
         *  previous.map((eachVal) =>{
         *  if(eachVal.id === id){
         *      return todo
         *  }else{
         *      eachVal
         *  }
         *  }))
         */
    }

    const deleteTodo = (id) =>{
        setTodos((previous) => previous.filter((todo) => todo.id !== id))
    }
    const toggleComplete = (id) =>{
        setTodos((previous) => previous.map((previousTodo) => 
                                            previousTodo.id === id ? 
                                            {...previousTodo, completed: 
                                            !previousTodo.completed} :
                                            previousTodo))
    }

    useEffect(() => {
       const todos =  JSON.parse(localStorage.getItem("todos"))

       if(todos && todos.length > 0){
            setTodos(todos)
       }
    }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div className='bg-[#172842] min-h-screen py-8'>
            <div className='w-full m-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
                <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
                    Manage Your Todos
                </h1>
                <div className='mb-4'>
                    {/* Todo from goes here */}
                    <TodoForm />
                </div>
                <div className='flex flex-wrap gap-y-3'>
                        {/* loop and add todoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id}
                            className="w-full"
                            >
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                </div>
            </div>

        </div>
    </TodoProvider>
  )
}

export default App