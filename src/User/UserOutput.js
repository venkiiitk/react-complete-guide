import React, {Component} from 'react';
import './User.css';
class UserOutput extends Component {
    render() {
        return (
            <div className="output">
                <p>
                    <b>Name : {this.props.userName} </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>

        );
    }
}

export default UserOutput;