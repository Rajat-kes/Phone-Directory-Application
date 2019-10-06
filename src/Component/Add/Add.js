import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Add extends Component {
    state = {
        name: '',
        phone: '',
    }

    handleChange = (type) => (event) => {
        this.setState({
            [type]: event.target.value
        });
    }

    phoneNumberValidater = (phoneNum) => {
        const regularExpression = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneNum.match(regularExpression)) return true;
        return false;
    }

    handleSubmit = () => {
        if (!this.phoneNumberValidater(this.state.phone)) {
            alert("Invalid Phone Number");
            return;
        }
        this.props.pushList(this.state.name, this.state.phone);
        this.props.history.goBack();
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Link
                    className="Link"
                    to="/"
                >BACK</Link>
                <div className="Body">
                    <div className="Body">
                        <label>Name:</label>
                        <div>
                            <input
                                className="Input"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange("name")}
                            />
                        </div>
                    </div>
                    <div className="Body">
                        <label>Phone:</label>
                        <div>
                            <input
                                className="Input"
                                type="number"
                                value={this.state.phone}
                                onChange={this.handleChange("phone")}
                            />
                        </div>
                    </div>
                    <div className="Body">
                        <strong>Subscriber to be added:</strong>
                    </div>
                    <div>
                        <label>Name: </label>
                        <label>{this.state.name}</label>
                    </div>
                    <div>
                        <label>Phone: </label>
                        <label>{this.state.phone}</label>
                    </div>
                    <div className="Body">
                        <button
                            className="Btn Green"
                            onClick={this.handleSubmit}
                        >ADD</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pushList: (name, phone) => {dispatch({ type: 'pushList', payload: {"name": name, "phone": phone} })}
    }
}

export default connect(null, mapDispatchToProps)(Add);