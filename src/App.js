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
        <PostItem post={{
            id: 1,
            title: "Test Post",
            content: "Test Post",
        }}/>
        <PostItem post={{
            id: 2,
            title: "Test FWQgfe",
            content: "Test Post",
        }}/>
        <PostItem post={{
            id: 3,
            title: "Test ffAQWasFF",
            content: "TsaADSAest Post",
        }}/>

        <PostItem post={{
            id: 4,
            title: "Test dada",
            content: "eqwadqe Post",
        }}/>



    </div>);
}

export default App;
