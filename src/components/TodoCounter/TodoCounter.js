import React from 'react'
import "./TodoCounter.css"


export default function TodoCounter({total, completed}) {

    return (
        <div>
            <h2 className="TodoCounter">Has Completado {completed} de {total} Tasks</h2>
        </div>
    )
}
