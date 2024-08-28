import React, { Component } from "react";
import ToDo from "./ToDo";
import todosData from '../Data/listeToDo.json'

class ListToDos extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.setState({ todos: todosData })
    }

    

    render() {
        return (
            <div className="card container mb-3">
                <ul className="list-group list-group-flush">
                    {
                        this.state.todos.map(todo => {
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