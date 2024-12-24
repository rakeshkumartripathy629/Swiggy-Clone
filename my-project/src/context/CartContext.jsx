import React, { createContext, useContext, useReducer } from 'react';
import { CartItem } from '../type';

function CartProvider({ children }) {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + action.payload.price,
          };
        }
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
        };
      }
      case 'REMOVE_ITEM': {
        const itemToRemove = state.items.find(item => item.id === action.payload);
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0),
        };
      }
      case 'CLEAR_CART':
        return { items: [], total: 0 };
      default:
        return state;
    }
  };

  const initialState = { items: [], total: 0 };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return React.createElement(
    CartContext.Provider,
    { value: { state, dispatch } },
    children
  );
}

const CartContext = createContext(null);

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
