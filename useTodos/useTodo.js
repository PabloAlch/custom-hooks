import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
  return JSON.parse( localStorage.getItem('todos') || [] )
}


export const useTodo = ()=>{

    const [todos, dispatch] = useReducer( todoReducer, [], init )
    
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos])

  
    const handleNewTodo = ( todo ) => {
      // console.log({todo}) // Comprobar si llega el boton Borrar de <TodoItem /> que es el nieto

      const action= {
        type: '[TODO] Add Todo',
        payload: todo 
      }

      dispatch( action )
    }


    const handleDeleteTodo = (id) => {
      // console.log({id}) // Comprobar si llega el boton Borrar de <TodoItem /> que es el nieto
      dispatch( {
        type: '[TODO] Remove Todo',
        payload: id,
      });
    }


    const handleToggleTodo = (id) => {
      console.log({ id }, 'Toggle') // Comprobar si llega el boton Borrar de <TodoItem /> que es el nieto
      dispatch( {
        type: '[TODO] Toggle Todo',
        payload: id,
      });
    }


  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
  
}




