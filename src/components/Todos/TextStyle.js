import React from 'react';

import './TextStyle.css';

const textStyle = (props) => {
    return (
        <div className="style">
            <button onClick={props.boldTodo}><strong>b</strong></button>
            <button onClick={props.italicTodo}><i>i</i></button>
            <button onClick={props.underlineTodo}><u>u</u></button>
        </div>
    );
}

export default textStyle;