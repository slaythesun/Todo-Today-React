import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TextStyle from './TextStyle';

const todos = (props) => {
        return (
            <>
                {props.updateTodoList.map(todo => {
                    return(
                        <div 
                            className="text-dark"
                            style={{
                                backgroundColor: todo.todoBackgroundColor,
                            }}
                            key={todo.id}>
                            <button
                                className="bg-danger text-light"
                                style={{
                                    display: 'inline',
                                    border: 'none',
                                    padding: '0.6rem 1rem',
                                }}
                                onClick={() => props.handleDeleteTodoItem(todo)}>Delete</button>
                            <p
                                style={{
                                    marginLeft: '1rem',
                                    display: 'inline',
                                    fontSize: '14px',
                                    fontWeight: todo.bold ? 'bold' : 'normal',
                                    fontStyle: todo.italic ? 'italic' : 'normal',
                                    textDecoration: todo.underline ? 'underline' : 'none'
                                }}>{todo.text}</p>
                            <TextStyle 
                                boldTodo={() => props.handleBoldTodo(todo.id)} 
                                italicTodo={() => props.handleItalicTodo(todo.id)}
                                underlineTodo={() => props.handleUnderlineTodo(todo.id)}/>
                        </div>
                    )
                })}
            </>
        );
}

export default todos;