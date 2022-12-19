import React, { useState } from "react";

export default function Orderedlist (){
    const [text, setText] = useState('');
    const [asc, setAsc] = useState(true);
    const [list, setList] = useState([]);

    function toggleOrder(){
        setAsc((previousValue) => !previousValue)
    }

    function updateText(event){
        setText(event.target.value);
    }

    function clearList(){
        setList([]);
        setText('');
    }

    return(
        <>
            <input 
                className="add-item"
                value={text}
                onChange={updateText} 
                onKeyDown={() => {}}
            />
            <button 
                className="sort-direction"
                onClick={toggleOrder}
            >
                {asc ? "⬇️" : "⬆️"}
            </button>
            <button 
                className="clear-list"
                onClick={clearList}
            >
                🆑
            </button>
            <ul className="item-list">
                {
                    list.map((item, i) => {
                        return<li key={i}>{item}</li>
                    })
                }
            </ul>
        </>
    )
}