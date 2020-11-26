import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select></div>
                <div className="filter-size">
                    Filter{" "}
                    <select value={this.props.type} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fruit">Fruit</option>
                    </select></div>
            </div>
        );
    }
}

export default Filter;