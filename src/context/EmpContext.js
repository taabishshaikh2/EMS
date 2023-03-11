import React, { createContext, useContext, useReducer } from 'react'

const EmpContext = createContext()

// build a provider
export const EmpStateProvider = ({ reducer, initialState, children }) => {
    return(
    <EmpContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </EmpContext.Provider>
    )
}

// this is how we use it inside of a component 
export const useStateValue = () => useContext(EmpContext);