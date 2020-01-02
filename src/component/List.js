import React from "react";

const List = props => (
    <ul>
        {props.items.map((item, index) => props.filter === item.status && (
            <li key={index} onClick={() => props.onSelectedItem(item)} className={item.status ? 'done' : ''}>{item.title}</li>
        ))}
    </ul>
)

export default List;
