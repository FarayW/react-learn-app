import React from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = React.useState([
        {id: 1, title: 'TypeScript', content: 'DESCRIPTION'},
        {id: 2, title: 'TypeScript 2', content: 'DESCRIPTION'},
        {id: 3, title: 'TypeScript 3', content: 'DESCRIPTION'},
    ]);



    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            content,
        }

        console.log(newPost);

        setPosts([...posts, newPost]);
    }

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    return (<div className="App">
        <form>
            <MyInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder='Название поста'/>
            <MyInput
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                placeholder='Описание поста'/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'TypeScript posts'} />
    </div>);
}

export default App;
