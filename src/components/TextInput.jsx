import React, {useState} from 'react';

const TextInput = () => {
    let [text, setText] = useState('TEXT');
    return (<div>
        <h1>{text}</h1>
        <input
            type="text"
            value={text}
            onChange={event => setText(event.target.value)}/>
    </div>);
};

export default TextInput;