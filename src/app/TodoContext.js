import React, { useState } from 'react'

const TodosContext = React.createContext([]);

export default function TodoContext({children}) {
    const [todoList, setTodoList] = useState(["Make Sandwich"]);
  return (
    <TodosContext.Provider value={{todoList,setTodoList}}>
        {children}
    </TodosContext.Provider>
  )
}

export {TodosContext};