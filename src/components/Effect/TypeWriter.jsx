import React, { useState, useEffect } from "react";

function TypeWriter({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1000
}){

    const[displayed, setDisplayedText] = useState("")
    const[isDeleting, setisDeleting] = useState(false)
    const[index, setIndex] = useState(0);
    useEffect(() => {
        const handleTyping = () => {
            if (texts && texts.length > 0) { // Check if texts array is not empty
                if (isDeleting) {
                    if (displayed.length > 0) {
                        setDisplayedText((prev) => prev.slice(0,-1))
                    } else {
                        setIndex(0)
                        setisDeleting(false);
                        setDisplayedText("");
                    }
                } else {
                    if(displayed.length < texts[index].length){
                        setDisplayedText((prev) => prev + texts[index].charAt(displayed.length));
                    }else{
                        setisDeleting(true);
                        setIndex((prev) =>(prev + 1) % texts.length);
                    }
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    },[displayed, isDeleting, index, texts, typingSpeed, deletingSpeed])

    return ( 
        <div className="typing-effect">
            {displayed}<span>|</span>
        </div>
    );
}

export default TypeWriter;