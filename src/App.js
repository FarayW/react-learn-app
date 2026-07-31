import React from 'react'
import './styles/App.css'
import PostList from "./components/PostList";

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
        <PostList posts={posts} />
        <PostList posts={posts2} />
    </div>);
}

export default App;
