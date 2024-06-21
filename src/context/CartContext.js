import { createContext } from "react"; // named import

const CartContext = createContext({
    cart: {},
    increaseQuantity: () =>  {},
    decreaseQuantity: () =>  {},
});

export default CartContext;
