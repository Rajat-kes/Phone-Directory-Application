import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";

class list extends Component {
    render() {
        return (
            <div>
                <Link to="/add" className="Link" >ADD</Link>
                <table className="Table Body">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>PHONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map(data => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.phone}</td>
                                    <td>
                                        <button
                                            className="Btn Red"
                                            onClick={() => this.props.deleteListById(data.id)}
                                        >DELETE</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table >
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        deleteListById: (id) => { dispatch({ type: "deleteListById", payload: { "id": id } }) }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(list);