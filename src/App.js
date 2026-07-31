import React from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = React.useState([{id: 1, title: 'TypeScript', content: 'DESCRIPTION'}, {
        id: 2, title: 'TypeScript 2', content: 'DESCRIPTION'
    }, {id: 3, title: 'TypeScript 3', content: 'DESCRIPTION'},]);

    const [post, setPost] = React.useState({title: '', content: ''});

    function addNewPost(e) {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', content: ''});
    }

    return (<div className="App">
        <form>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
                type="text"
                placeholder='Название поста'/>
            <MyInput
                value={post.content}
                onChange={(e) => setPost({...post, content: e.target.value})}
                type="text"
                placeholder='Описание поста'/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'TypeScript posts'}/>
    </div>);
}

export default App;
