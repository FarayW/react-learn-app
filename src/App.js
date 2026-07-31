import React from 'react'
import './styles/App.css'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import CounterMult from "./components/CounterMult";
import TextInput from "./components/TextInput";
import PostItem from "./components/PostItem";

function App() {

    const [posts, setPosts] = React.useState([
        {id: 1, title: 'TypeScript', content: 'DESCRIPTION'},
        {id: 2, title: 'TypeScript 2', content: 'DESCRIPTION'},
        {id: 3, title: 'TypeScript 3', content: 'DESCRIPTION'},
    ]);

    const [posts2, setPosts2] = React.useState([
        {id: 1, title: 'Rust', content: 'DESCRIPTION'},
        {id: 2, title: 'Rust 2', content: 'DESCRIPTION'},
        {id: 3, title: 'Rust 3', content: 'DESCRIPTION'},
    ]);



    return (<div className="App">
        {
            posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))
        }

        {
            posts2.map((post) => (
                <PostItem key={post.id} post={post} />
            ))
        }
    </div>);
}

export default App;
