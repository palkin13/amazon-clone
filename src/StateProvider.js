// setup data layer
// We need this to track basket
import React , {useContext , createContext , useReducer} from "react";

// THIS IS DATA LAYER
export const StateContext = createContext();


// BUILD A PROVIDER
// We can wrap our entire app inside of this provider 
// and give access to this data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

