import React, { Component } from "react";
import ToDo from "./ToDo";

class ListToDos extends Component {

    render() {
        return (
            <div className="card container mb-3">
                <ul className="list-group list-group-flush">
                    {
                        this.props.todos.map(todo => {
                            return(
                                <ToDo key={todo.id} todo={todo} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListToDos