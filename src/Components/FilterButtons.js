import React, { Component } from "react";

class FilterButtons extends Component {
    render() {
        return (
            <div className="btn-group mb-3">
                <button className="btn btn-primary" onClick={(e) => {this.props.filterHandler(e)}}>All</button>
                <button className="btn btn-primary" onClick={(e) => {this.props.filterHandler(e)}}>Active</button>
                <button className="btn btn-primary" onClick={(e) => {this.props.filterHandler(e)}}>Completed</button>
            </div>
        )
    }
}

export default FilterButtons