import React, { Component } from "react";
import ToDo from "./ToDo";

class ListToDos extends Component {

    filterTodos = () => {
        const todos = this.props.todos
        const todosShowed = this.props.todosShowed

        if (todosShowed === 'Completed') {
            return todos.filter(todo => todo.completed)
        } else if (todosShowed === 'Active') {
            return todos.filter(todo => !todo.completed)
        }
        return todos
    }

    render() {
        const filteredTodos = this.filterTodos()
        return (
            <div className="card container mb-3">
                <ul className="list-group list-group-flush">
                    {
                        filteredTodos.map(todo => {
                            return (
                                <ToDo
                                    key={todo.id}
                                    todo={todo}
                                    editToDo={this.props.editToDo}
                                    hanldeToDoCompleted={this.props.hanldeToDoCompleted}
                                    deleteHandler={this.props.deleteHandler}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListToDos