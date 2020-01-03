import React from "react";

const List = props => (
    <ul>
        {props.items.map((item, index) => props.filter === item.status && (
            <li key={index} className={item.status ? 'done' : ''}>
                <p onClick={() => props.onChangeItem(item)}>{item.title}</p>
                <button onClick={() => props.onSelectedItem(item)}>Detail</button>
                <button onClick={() => props.onEditItem(item)}>Edit</button>
                <button onClick={() => props.onDeleteItem(item)} disabled={item.status ? true : false}>Delete</button>
            </li>
        ))}
    </ul>
)

export default List;
