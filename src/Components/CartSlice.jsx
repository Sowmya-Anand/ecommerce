import {createSlice} from '@reduxjs/toolkit';
const initialState={
    cartItems:[],
};
const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       addItemToCart(state,action){
        const exist=state.cartItems.find(item=>item.id===action.payload.id);
        if (exist){
            exist.quantity+=1
        }
        else{
            state.cartItems.push({...action.payload,quantity:1});
        }
       },
       removeItemFromCart(state,action){
        state.cartItems=state.cartItems.filter(item=>item.id!==action.payload.id);
       },
       clearCart(state){
        state.cartItems=[];
       },
       increaseItemQuantity(state,action){
        const item=state.cartItems.find(item => item.id===action.payload.id);
        if (item){
            item.quantity+=1
        }
       },
       decreaseItemQuantity(state,action){
        const item=state.cartItems.find(item =>item.id===action.payload);
        if (item && item.quantity>1){
            item.quantity-=1;
        }
       },
    }
});
export const{
    addItemToCart,
    removeItemFromcart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQUantity,
}=cartSlice.actions;
export default cartSlice.reducer;