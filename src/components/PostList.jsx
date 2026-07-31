import React from 'react';
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = ({posts, title, removeCallback}) => {
    return (
        <div>
            {
                posts.length === 0 ?
                    <h1 className={classes.title}>Постов нету</h1>
                    :
                    <>
                        <h1 className={classes.title}>{title}</h1>
                        {
                            posts.map((post) => (
                                <PostItem removeCallback={removeCallback} key={post.id} post={post} />
                            ))
                        }
                    </>
            }
        </div>
    );
};

export default PostList;