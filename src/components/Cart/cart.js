import React, { useState } from "react";

function Cart() {
    const [cart, setCart] = useState({
        1:{ name: "apple", quantity: 0 },
        2:{ name: "banana", quantity: 0 },
        3:{ name: "orange", quantity: 0 }
    });
    
    const incrementCart = (id) => {
        setCart(prevCart => {
            return {...prevCart, [id]: {...prevCart[id], quantity: prevCart[id].quantity + 1}};
        });
    }

    const decrementCart = (id) => {
        setCart(prevCart => {
            if (prevCart[id].quantity > 0) {
                return {...prevCart, [id]: {...prevCart[id], quantity: prevCart[id].quantity - 1}};
            }
            return prevCart;
        });
    }

    return (
        <div>
            <button onClick={() => incrementCart(1)}>Add Apple to Cart</button>
            <button onClick={() => decrementCart(1)}>Remove Apple from Cart</button>
            <button onClick={() => incrementCart(2)}>Add Banana to Cart</button>
            <button onClick={() => decrementCart(2)}>Remove Banana from Cart</button>
            <button onClick={() => incrementCart(3)}>Add Orange to Cart</button>
            <button onClick={() => decrementCart(3)}>Remove Orange from Cart</button>
            <p>Cart: {JSON.stringify(cart)}</p>
        </div>
    );
}

export default Cart;