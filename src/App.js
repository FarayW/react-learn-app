import React from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

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
            <input type="text" placeholder='Название поста'/>
            <input type="text" placeholder='Описание поста'/>
            <MyButton disabled>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={'TypeScript posts'} />
        <PostList posts={posts2} title={'Rust posts'} />
    </div>);
}

export default App;
