import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({createCallback}) => {
    const [post, setPost] = React.useState({title: '', content: ''});


    function addNewPost(e) {
        e.preventDefault();
        createCallback(post);
        setPost({title: '', content: ''});
    }


    return (
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
    );
};

export default PostForm;