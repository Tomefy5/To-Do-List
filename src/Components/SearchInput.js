import React, { Component } from "react";

class SearchInput extends Component {

    addNewToDo = this.props.addNewToDo

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