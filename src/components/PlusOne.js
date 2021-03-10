import React from 'react';

const PlusOne = ({ clicks, setNbr }) => {
    let addOne = () => {
        clicks += 1 
        setNbr({clicks});
    };

    return (
        <div>
            <h1>Exo 1</h1>
            <h3>You've clicked {clicks} times</h3>
            <button onClick={addOne}>+1</button>
        </div>
    );
};

export default PlusOne;