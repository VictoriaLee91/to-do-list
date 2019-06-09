import React, { Component } from 'react';
import './App.css';
export default class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskStatus: false
        }
    }
    toggleClass = () => {
        this.setState({
            taskStatus: !this.state.taskStatus
        })
    }
    handleDelete = () => {
        this.props.clearTodo(this.props.item.id)
    }
    render() {
        const { item } = this.props
        // const liStyle = {
        //     color: this.state.taskStatus ? 'green' : 'red'
        // }
        return (
            <li key={item.id} className={this.state.taskStatus ? 'done' : 'notDone'} onClick={this.toggleClass}>
                {item.task}
                <button onClick={this.handleDelete}>X</button>
            </li>
        )
    }
}