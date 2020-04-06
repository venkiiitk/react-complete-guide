import React, {Component} from 'react';
import './User.css';

class UserInput extends Component {
    inputTextStyle = {
        height: "20px",
        border: "solid 1px blue"
    };

    render() {
        return (
            <div>
                <label>User Name : </label>
                <input style={this.inputTextStyle} onChange={this.props.change} type="text" name="userName"/>
            </div>

        );
    }

}

export default UserInput;