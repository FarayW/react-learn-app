import React from 'react';
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {
                posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))
            }
        </div>
    );
};

export default PostList;