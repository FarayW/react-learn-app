import React from 'react';
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = (props) => {

    const {posts, setPosts, children} = props;

    function removePost(post) {
        setPosts(prev => prev.filter(p => p.id !== post.id));
    }


    return (
        <div>
            {
                posts.length === 0 ?
                    <h1 className={classes.title}>Постов нету</h1>
                    :
                    <>
                        <h1 className={classes.title}>{children}</h1>
                        {
                            posts.map((post) => (
                                <PostItem removeCallback={removePost} key={post.id} post={post} />
                            ))
                        }
                    </>
            }
        </div>
    );
};

export default PostList;