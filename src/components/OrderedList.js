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

    function updateList(event){
        if(event.key === 'Enter'){
            if(text.trim() === ''){
                return;
            }
            setList((previousList) => previousList.concat(text));
            setText('');
        }
    }

    let listItems = [];
    if(asc){
        listItems = list.sort();
    }else{
        listItems = list.sort().reverse();
    }

    const orderedList = listItems.map((item, i) => {
        return <li key={i}>{item}</li>
    })

    return(
        <>
            <input 
                className="add-item"
                value={text}
                onChange={updateText} 
                onKeyDown={updateList}
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
                {orderedList}
            </ul>
        </>
    )
}