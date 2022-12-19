import React, { useState } from "react";

export default function Orderedlist (){
    return(
        <>
            <input 
                className="add-item" 
                onKeyDown={() => {}}
            />
            <button 
                className="sort-direction">
                ⬇️⬆️
            </button>
            <button 
                className="clear-list">
                🆑
            </button>
            <ul className="item-list">
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </>
    )
}