import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const colorSwatch = (props) => {
    return (
        <div
            className="bg-light text-dark text-center"
            style={{
                display: 'inline-block',
                width: '100%',
                padding: '0.25rem 2rem 0.75rem 2rem',
            }}>
            <p
                style={{
                    fontFamily: "'Fredoka One', cursive",
                    letterSpacing: '1px',
                    display: 'inline',
                    margin: '0',
                    float: 'left',
                }}>Colors</p>
            <div 
                style={{
                    display: 'inline',
                    width: '60%',
                    paddingLeft: '20px'
                }}>
                <button
                    style={{
                        width: '20px',
                        height: '20px',
                        border: '1px solid lightgray',
                        backgroundColor: '#f8f9fa',
                        marginRight: '20px'
                    }} 
                    onClick={() => props.todoColor('#f8f9fa')}></button>
                <button
                    style={{
                        width: '20px',
                        height: '20px',
                        border: 'none',
                        backgroundColor: '#75c2c9',
                        marginRight: '20px'
                    }}
                    onClick={() => props.todoColor('#75c2c9')}></button>
                <button
                    style={{
                        width: '20px',
                        height: '20px',
                        border: 'none',
                        backgroundColor: 'lightgreen',
                        marginRight: '20px'
                    }}
                    onClick={() => props.todoColor('lightgreen')}></button>
                <button
                    style={{
                        width: '20px',
                        height: '20px',
                        border: 'none',
                        backgroundColor: 'coral',
                        marginRight: '20px'
                    }}
                    onClick={() => props.todoColor('coral')}></button>
                <button
                    style={{
                        width: '20px',
                        height: '20px',
                        border: 'none',
                        backgroundColor: '#dbc558',
                        marginRight: '20px'
                    }}
                    onClick={() => props.todoColor('#dbc558')}></button>
                <button
                    style={{
                        width: '20px',
                        height: '20px',
                        border: 'none',
                        backgroundColor: '#cf9bc9',
                    }}
                    onClick={() => props.todoColor('#cf9bc9')}></button>
            </div>
        </div>
    );
}

export default colorSwatch;