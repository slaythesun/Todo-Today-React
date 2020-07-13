import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const input = (props) => {
    return (
        <div 
            className="bg-light text-center" 
            style={{
                fontFamily: "'Tajawal', sans-serif",
                padding: '1rem 0.4rem'
            }}>
                <input 
                    className="rounded"
                    style={{
                        border: '1px solid lightgray',
                        width: '60%',
                        padding: '5px 10px',
                        marginRight: '1.5rem'
                    }}
                    type="text" 
                    value={props.updatedText}
                    placeholder="Type todo here..."
                    onChange={e => props.grabText(e)}/>
                <button 
                    className="bg-warning text-light rounded"
                    style={{
                        fontFamily: "'Fredoka One', cursive",
                        letterSpacing: '1px',
                        border: 'none',
                        padding: '5px 10px'
                    }} 
                    onClick={props.addTodoItem}>Enter</button>
        </div>
    )
};

export default input;
