import React from 'react'

export default function TodoList() {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}
