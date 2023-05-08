import React from 'react';

function Button(props) {
return (
    <button
        type="button"
        onClick={()=> console.log(props.name)}
        disabled={props.disabled}
    >
        {props.name}
    </button>
)
}

export default Button