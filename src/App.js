import React from 'react'
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
import ClassCounter from "./components/ClassCounter";

function App() {
    return (<div className="App">
        <Counter/>
        <Counter/>
        <TextInput/>
        <TextInput/>
        <ClassCounter/>
    </div>);
}

export default App;
