import React, { useState } from "react";

export default function Orderedlist (){
    const [text, setText] = useState('');
    const [asc, setAsc] = useState(true);
    const [list, setList] = useState([]);

    function toggleOrder(){
        setAsc((previousValue) => !previousValue)
    }

    return(
        <>
            <input 
                className="add-item" 
                onKeyDown={() => {}}
            />
            <button 
                className="sort-direction"
                onClick={toggleOrder}
            >
                {asc ? "⬇️" : "⬆️"}
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