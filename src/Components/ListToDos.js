import React, { Component } from "react";
import ToDo from "./ToDo";

class ListToDos extends Component {
    render() {
        return (
            <div className="card container mb-3">
                <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item">Task1</li>
                    <li className="list-group-item">Task2</li>
                    <li className="list-group-item">Task3</li> */}
                    <ToDo />
                    <ToDo />
                    <ToDo />
                    <ToDo />
                </ul>
            </div>
        )
    }
}

export default ListToDos