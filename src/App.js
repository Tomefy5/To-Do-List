import SearchInput from './Components/SearchInput'
import FilterButtons from './Components/FilterButtons'
import ListToDos from './Components/ListToDos'
import { Component } from 'react';
import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app container card mt-5 bg-dark">
        <div className="card-header mb-3">
          <h1 className="display-5 text-secondary fw-bold text-center">To Do List</h1>
        </div>
        <SearchInput />
        <FilterButtons />
        <ListToDos />
      </div>
    );
  }
}

export default App;
