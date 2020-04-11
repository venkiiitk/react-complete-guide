import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";
import Util from "./util/Util";
import Radium from 'radium';

class App extends Component {
    state = {
        showPersons: true,
        persons: [
            {name: "venkat", age: "25", id: "1"},
            {name: "mahi", age: "25", id: "2"},
            {name: "reddy", age: "25", id: "3"},
        ]

    };

    changeNameEvent = () => {
        this.setState({
            persons: [
                {name: "venkat", age: "25", id: "1"},
                {name: "mahi", age: "25", id: "2"},
                {name: "reddy", age: "25", id: "3"},
            ]
        });
    };

    hidePersons = () => {
        this.setState(
            {
                showPersons: !this.state.showPersons
            }
        )
    };

    removeElement = (personIndex) => {
        // const personsList = this.state.persons;
        const util = new Util();
        // const personsList = util.sliceArray(this.state.persons);
        const personsList = util.spreadArray(this.state.persons);
        util.removeElement(personsList, personIndex);
        this.setState({persons: personsList});

    };


    render() {

        const styleClass = {
            backgroundColor: 'green',
            color: 'white',
            border: '2px solid black',
            cursor: 'pointer',
            padding: '10px',
            width: '100px',
            'font-weight': 'bold',
            ':hover': {
                backgroundColor: 'red',
                color: 'black'
            }
        };
        const classes = new Util().classNamesArray("red", "bold");
        const persons = this.state.showPersons ? (this.state.persons.map((person, index) => {
            return (<Person click={() => this.removeElement(index)} key={person.id} name={person.name}
                            age={person.age}/>);
        })) : null;

        return (
            <div className='App'>
                <h1>Hi, this is my first react component.</h1>
                <p className={classes.join(' ')}>Hi, this is my first react component.</p>
                <button style={styleClass} onClick={this.hidePersons}>Toggle</button>
                {persons}
            </div>
        );
    };
}

export default Radium(App);
