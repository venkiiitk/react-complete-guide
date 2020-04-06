import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>My name is {props.name} and i am {props.age} years old . </p>
            {props.children}
        </div>
    );
};

export default person;
