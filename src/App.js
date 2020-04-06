import React, {Component} from 'react';
import './App.css';
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends Component {
    state = {
        userInput: [
            {userName: "venkat"},
            {userName: "mahi"},
            {userName: "reddy"},

        ]
    };
    changeNameEvent = () => {
        this.setState({
            userInput: [
                {userName: "reddy"},
                {userName: "honey",},
                {userName: "nadikattu",},

            ]
        });
    };

    render() {
        return (
            <div className='App'>
                <h1>Hi, this is my first react component.</h1>
                <UserInput change={this.changeNameEvent} />
                <UserOutput  userName={this.state.userInput[0].userName}/>
                <UserOutput userName={this.state.userInput[1].userName}/>
                <UserOutput  userName={this.state.userInput[2].userName}/>
            </div>
        );
    }
}

export default App;
