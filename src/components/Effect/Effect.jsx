import React, { useEffect, useState } from "react";

function Effect() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        console.log("Count changed");
    });

    useEffect(() => {
        console.log("Count1 changed");
    }, [count1]);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>Count1: {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Increment</button>
            <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
        </div>
    )
}

export default Effect;
