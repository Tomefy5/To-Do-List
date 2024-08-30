import SearchInput from './Components/SearchInput'
import FilterButtons from './Components/FilterButtons'
import ListToDos from './Components/ListToDos'
import { Component } from 'react';
import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    const savedToDos = localStorage.getItem("todos")

    this.state = {
      todos: savedToDos ? JSON.parse(savedToDos) : []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  }

  addNewToDo = (e) => {
    e.preventDefault()
    const input = document.querySelector(".form-control")
    if (input.value.trim() !== '') {
      const newToDo = {
        id: this.state.todos.length,
        todo: input.value,
        priority: "medium",
        completed: false
      }

      const updatedToDos = [...this.state.todos, newToDo]

      this.setState({ todos: updatedToDos })
    }

  }

  editToDo = (index) => {
    const todoTexteEdit = prompt("Enter to-do name: ")
    let todoEditPriority = prompt("Entrer the priority (low/medium/high): ")

    while(todoEditPriority !== 'low' && todoEditPriority !== 'medium' && todoEditPriority !== 'high') {
      todoEditPriority = prompt("Entrer the priority (low/medium/high): ")
    }

    if (todoTexteEdit && todoEditPriority) {
      const updatedToDos = this.state.todos.map((todo, compt) => {
        if (compt === index) {
          return {
            ...todo,
            todo: todoTexteEdit,
            priority: todoEditPriority
          }
        }
        return todo
      })

      this.setState({todos: updatedToDos})
    }
  }

  hanldeToDoCompleted = (index) => {
    const updatedToDos = this.state.todos.map((todo, compt) => {
      if(compt === index) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })

    this.setState({todos: updatedToDos})
  }

  render() {
    return (
      <div className="app container card mt-5 bg-dark">
        <div className="card-header mb-3">
          <h1 className="display-5 text-secondary fw-bold text-center">To Do List</h1>
        </div>
        <SearchInput addNewToDo={this.addNewToDo} />
        <FilterButtons />
        <ListToDos todos={this.state.todos} editToDo={this.editToDo} hanldeToDoCompleted={this.hanldeToDoCompleted}/>
      </div>
    );
  }
}

export default App;
