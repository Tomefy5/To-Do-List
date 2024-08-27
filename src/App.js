import './App.css';
import SearchInput from './Components/SearchInput'
import FilterButtons from './Components/FilterButtons'
import ListToDos from './Components/ListToDos'

function App() {
  return (
    <div className="container card mt-5">
      <div className="card-header mb-3">
        <h1 className="display-5 text-secondary fw-bold text-center">To Do List</h1>
      </div>
      <SearchInput />
      <FilterButtons />
      <ListToDos />
    </div>
  );
}

export default App;
