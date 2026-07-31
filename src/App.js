import React from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = React.useState([{id: 1, title: 'aaa', content: 'l'}, {
        id: 2, title: 'bbb 2', content: 'zz'
    }, {id: 3, title: 'zzz 3', content: 'a'},]);

    const [selectedSort, setSelectedSort] = React.useState('');

    function createPost(post) {
        setPosts([...posts, {...post, id: Date.now()}]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts(prev => [...prev].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    return (<div className="App">
        <PostForm createCallback={createPost}/>

        <hr style={{margin: "10px 0"}}/>

        <div>
            <MySelect
                defaultValue='Сортировка'
                value={selectedSort}
                onChange={sortPosts}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'content', name: 'По описанию'},
                ]}
            />
        </div>
        <PostList removeCallback={removePost} posts={posts} title={'TypeScript posts'}/>
    </div>);
}

export default App;
