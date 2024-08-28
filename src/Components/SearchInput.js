import React, { Component } from "react";
import todosData from '../Data/listeToDo.json'

class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData,
            newToDo: null
        }
    }

    addToDo() {
        const newToDo = {
            id: this.state.todos.length + 1,
            todo: this.state.newToDo,
            priority: "medium",
            completed: false
        }

        const updatedToDo = [...this.state.todos, newToDo]

        this.setState({todos: updatedToDo, newToDo: null})

        this.updatedJSONFile(updatedToDo)
    }

    updatedJSONFile = (updatedToDo) => {
        fetch('../Data/listeToDo.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedToDo)
        })
        .then(response => response.json())
        .then(data => console.log('Mis à jour réussi', data))
        .catch((error) => {
            console.error('Erreur: ', error)
        })
    }

    addNewToDo = (e) => {
        e.preventDefault()
        const input = document.querySelector('.form-control')
        if(input.value.trim() === '') {
            return
        }
        this.setState({newToDo: input.value})  
        this.addToDo()
    }

    render() {
        return(
           <form className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add new to-do..." aria-label="Search"/>
                <button className="btn btn-secondary" type="submit" onClick={this.addNewToDo}>Add</button>
           </form>
        )
    }
}

export default SearchInput