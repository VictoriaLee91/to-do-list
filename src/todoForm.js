import React, { Component } from 'react';
import './App.css';
export default class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.text)
        this.setState({
            text: ''
        })
    }



    render() {
        return (
            <div className="container">
                <form className="Form" onSubmit={this.handleSubmit}>
                    <input type="text" name="newTodo" value={this.state.text} onChange={this.handleChange} />
                    <input disabled={!this.state.text.length} type="submit" />
                </form>
            </div>
        )
    }
}
