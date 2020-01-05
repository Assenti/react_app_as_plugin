import React from 'react';

export const Button = (props) => {
    return (
        <button onClick={() => props.onAction()} className={props.btnClass}>{props.name}</button>
    )
}

