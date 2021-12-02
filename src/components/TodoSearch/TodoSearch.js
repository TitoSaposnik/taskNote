import React from 'react'
import "./TodoSearch.css"


export default function TodoSearch() {
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
    }
    return (
        <div>
            <input 
            className="TodoSearch" placeholder = "Cebolla"
            onChange={onSearchValueChange}
            />
        </div>
    )
}
