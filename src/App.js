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



    function createPost(post) {
        setPosts([...posts, {...post, id: Date.now()}]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (<div className="App">
        <PostForm createCallback={createPost}/>

        <hr style={{margin: "10px 0"}}/>

        <PostFilter setPosts={setPosts} />

        <PostList removeCallback={removePost} posts={posts} title={'TypeScript posts'}/>
    </div>);
}

export default App;
