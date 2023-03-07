import React, { useState } from "react";


export default function Dictionary() {
    let [insertWord, setInsertWord] = useState("");
    
    function search(event) {
        event.preventDefault();
       alert(`Searching for ${insertWord}`);
    } 

    function handleInput(event) {
       setInsertWord(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}> 
                <input type="search" onChange={handleInput}></input>
            </form>
        </div>
    )
};