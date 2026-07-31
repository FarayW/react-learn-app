import React from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = React.useState([{id: 1, title: 'TypeScript', content: 'DESCRIPTION'}, {
        id: 2, title: 'TypeScript 2', content: 'DESCRIPTION'
    }, {id: 3, title: 'TypeScript 3', content: 'DESCRIPTION'},]);

    function createPost(post) {
        setPosts([...posts, {...post, id: Date.now()}]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (<div className="App">
        <PostForm createCallback={createPost}/>
        <PostList removeCallback={removePost} posts={posts} title={'TypeScript posts'}/>
    </div>);
}

export default App;
