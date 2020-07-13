import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Input from './Input/Input';
import Todos from './Todos/Todos';
import ColorSwatch from './ColorSwatch/ColorSwatch';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            todoList: [],
            todoBackgroundColor: '#f8f9fa'
        };
    }


    /* Change Todo Item Background Color */
    handleColorSwatch = (color) => {
        this.setState({
            todoBackgroundColor: color
        });
    }
    
    /* Take UserInput and set value*/
    handleTodoTextChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }

    /* Create new Todo submission */
    handleTodoListUpdate = (textVal) => {
        this.setState({
            userInput: '',
            todoList: [
                ...this.state.todoList,
                {
                    id: Math.floor(Math.random() * 100000000),
                    text: textVal,
                    bold: false,
                    italic: false,
                    underline: false,
                    todoBackgroundColor: this.state.todoBackgroundColor
                }
            ]
        });
    } 

    /* Delete Todo from List */
    handleDeleteTodoItem = (todoItem) => {
        this.setState({
            todoList: this.state.todoList.filter(el => el !== todoItem)
        });
    }

    /* Handle Bold Text Decoration */
    handleBoldTodo = (id) => {
        const newTodoList = this.state.todoList.map(todo => {
            if(todo.id === id) {
                const updatedItem = {
                    ...todo,
                    bold: !todo.bold
                };
                return updatedItem;
            }
            return todo;
        });
        this.setState({
            todoList: newTodoList
        });
    }
    
    /* Handle Italic Text Decoration */
    handleItalicTodo = (id) => {
        const newTodoList = this.state.todoList.map(todo => {
            if(todo.id === id) {
                const updatedItem = {
                    ...todo,
                    italic: !todo.italic
                };
                return updatedItem;
            }
            return todo;
        });
        this.setState({
            todoList: newTodoList
        });
    }

    /* Handle Underline Text Decoration */
    handleUnderlineTodo = (id) => {
        const newTodoList = this.state.todoList.map(todo => {
            if(todo.id === id) {
                const updatedItem = {
                    ...todo,
                    underline: !todo.underline
                };
                return updatedItem;
            }
            return todo;
        });
        this.setState({
            todoList: newTodoList
        });
    }

    render() {
        return (
            <div
                style={{
                    height: '100vh',
                    overflowY: 'scroll'
                }}>
                <div className="title text-center bg-success text-white"
                    style={{
                        fontFamily: "'Fredoka One', cursive",
                        letterSpacing: '2px',
                        margin: '0',
                        padding: '1rem 2rem .4em 2rem',
                        borderBottom: '1px solid lightgray',
                    }}>
                    <h2
                        style={{
                            marginBottom: '5px'
                        }}>Todo Today</h2>
                    <h6>Created by slaythesun</h6>
                </div>
                <Input 
                    addTodoItem={() => this.handleTodoListUpdate(this.state.userInput)} 
                    grabText={this.handleTodoTextChange} 
                    updatedText={this.state.userInput}/>
                <ColorSwatch todoColor={this.handleColorSwatch}/>
                <Todos 
                    handleDeleteTodoItem={this.handleDeleteTodoItem} 
                    updateTodoList={this.state.todoList}
                    handleBoldTodo={this.handleBoldTodo}
                    handleItalicTodo={this.handleItalicTodo}
                    handleUnderlineTodo={this.handleUnderlineTodo}/>
            </div>
        );
    }
}

export default TodoBox;
