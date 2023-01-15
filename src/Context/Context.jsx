import React, { createContext, useState } from 'react'

export const Context = createContext({})

export const Provider = ({children}) =>{
  
  const [input, setInput] = useState("");




  return(
    <Context.Provider
      value={{input}}>

      {children}
    </Context.Provider>
  )
}