import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    // cart : []
    cart : [
          {
            pizzaId: 12,
            name: 'Mediterranean',
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,
          }]
}

const cartSlice = createSlice({
    name : 'cart', 
    initialState, 
    reducers : { 
        addItem(state, action){
            state.cart.push(action.payload); 
        },
        removeItem(state, action){
            let index = state.cart.findIndex(item => item.pizzaId === action.payload); 
            state.cart.splice(index, 1);
        },
        increaseItemQuantity(state,action){
            let pizza = state.cart.find(item => item === action.payload); 
            pizza.quantity++; 
            pizza.totalPrice = pizza.unitPrice * pizza.quantity; 
        }, 
        decreaseItemQuanityt(state,action){
            let pizza = state.cart.find(item => item === action.payload); 
            if(pizza.quantity > 0){
                pizza.quantity--; 
            }
            pizza.totalPrice = pizza.unitPrice * pizza.quantity; 
        }, 
        clearCart(state, action){
            state.cart = []; 
        }
    }
})

export const {addItem, removeItem, increaseItemQuantity, decreaseItemQuanityt, clearCart} = cartSlice.actions; 
export default cartSlice.reducer; 