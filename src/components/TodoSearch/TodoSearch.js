import React from 'react'
import "./TodoSearch.css"


export default function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState("");

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return [
        <div>
            <input 
            className="TodoSearch" placeholder = "Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
            />
        <p>{searchValue}</p>
        </div>
    ]
}
