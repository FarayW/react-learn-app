import React, {useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'aaa', content: 'l'},
        {id: 2, title: 'bbb 2', content: 'zz'},
        {id: 3, title: 'zzz 3', content: 'a'},
    ]);

    return (
        <div className="App">
            <PostForm setPosts={setPosts}/>
            <hr style={{margin: "10px 0"}}/>
            <PostFilter setPosts={setPosts}/>
            <PostList setPosts={setPosts} posts={posts}>TypeScript posts</PostList>
        </div>
    );
}

export default App;
