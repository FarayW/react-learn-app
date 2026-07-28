import React from 'react';

const CounterMult = () => {
    let [num, setNum] = React.useState(2);
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => setNum(num * 2)}>*</button>
        </div>
    );
};

export default CounterMult;