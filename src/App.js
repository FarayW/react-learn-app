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

    const [posts2, setPosts2] = React.useState([
        {id: 1, title: 'Rust', content: 'DESCRIPTION'},
        {id: 2, title: 'Rust 2', content: 'DESCRIPTION'},
        {id: 3, title: 'Rust 3', content: 'DESCRIPTION'},
    ]);



    return (<div className="App">
        <form>
            <MyInput type="text" placeholder='Название поста'/>
            <MyInput type="text" placeholder='Описание поста'/>
            <MyButton>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'TypeScript posts'} />
        <PostList posts={posts2} title={'Rust posts'} />
    </div>);
}

export default App;
