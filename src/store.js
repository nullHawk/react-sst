import {createStore} from "redux";

function cartReducer(state={items:{}},action){
    switch(action.type){
        case "ADD_TO_CART":
            const product = action.payload;
            if(state.items[product.id]){
                return {
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity: state.items[product.id].quantity+1
                        }
                    }
                }
            }else{
                return {
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity: 1
                        }
                    }
                
                }
            }
            
        case "REMOVE_FROM_CART":
            const productToRemove = action.payload;
            if(state.items[productToRemove.id].quantity > 1){
                return {
                    ...state,
                    items:{
                        ...state.items,
                        [productToRemove.id]:{
                            ...productToRemove,
                            quantity: state.items[productToRemove.id].quantity-1
                        }
                    }
                }
            }else{
                const items = {...state.items};
                delete items[productToRemove.id];
                return {
                    ...state,
                    items
                }
            }
        default:
            return state;   
    }
}

const store = createStore(cartReducer);

export default store;

//action is an object with type and payload