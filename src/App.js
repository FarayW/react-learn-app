import React from 'react'
import './styles/App.css'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import CounterMult from "./components/CounterMult";
import TextInput from "./components/TextInput";
import PostItem from "./components/PostItem";

function App() {
    return (<div className="App">
        <Counter/>
        <ClassCounter/>
        <CounterMult/>
        <TextInput/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>


    </div>);
}

export default App;
