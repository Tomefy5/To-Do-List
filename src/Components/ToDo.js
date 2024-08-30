import React, { Component } from "react";

class ToDo extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center p-1">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="id" checked={this.props.todo.completed} onChange={() => this.props.hanldeToDoCompleted(this.props.todo.id)}/>
                </div>
                <div className="form-label">
                    <label className="form-label fw-bold">{this.props.todo.todo}</label>
                </div>
                <div>
                    <span className="badge bg-warning text-bg-danger">Priorité: {this.props.todo.priority}</span>
                </div>
                <div>
                    <button className="btn btn-outline-primary" onClick={() => this.props.editToDo(this.props.todo.id)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => this.props.deleteHandler(this.props.todo.id)}>Delete</button>
                </div>
            </li>
        )
    }
}

export default ToDo