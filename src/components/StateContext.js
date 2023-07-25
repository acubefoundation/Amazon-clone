// import React, { useContext, createContext, useReducer } from 'react'
 
// export const StateContext = createContext()


// export const  ProvideState = ({myReducer, initialState, children}) => {
// <StateContext.Provider value={useReducer(myReducer, initialState)}>
//     {children}
// </StateContext.Provider>
// };
// export const UsingStateValue = () => useContext(StateContext);












import React, { useContext, createContext, useReducer } from 'react';

export const StateContext = createContext();

export const ProvideState = ({ myReducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(myReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const initialValue = {
  basket: [],
  user: null,
};

export const myReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove product from basket because it's not in the basket");
      }
      
      return {
        ...state,
        basket: newBasket,
      };
      case 'ADD_USER':
        console.log('User:', action.user);
        return {
          ...state,
          user: action.user,
        };
        case 'SIGN_OUT':
          return {
            ...state,
            user: null,
          };
    default:
      return state;
  }
};