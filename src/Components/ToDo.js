import React, { Component } from "react";

class ToDo extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-center-center p-2 mb-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="1" />
                    <label className="form-check-label" for="1">Tâche 1</label>
                </div>
                <div>
                    <span className="badge bg-warning text-bg-danger">Priorité: Elevé</span>
                </div>
                <div>
                    <button className="btn btn-sm btn-outline-success">Completed</button>
                    <button className="btn btn-sm btn-outline-danger ms-2">Delete</button>
                </div>
            </li>
        )
    }
}

export default ToDo