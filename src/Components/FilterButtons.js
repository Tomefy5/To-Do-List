import React, { Component } from "react";

class FilterButtons extends Component {
    render() {
        return (
            <div className="btn-group mb-3">
                <button className="btn btn-primary">All</button>
                <button className="btn btn-primary">Active</button>
                <button className="btn btn-primary">Completed</button>
            </div>
        )
    }
}

export default FilterButtons