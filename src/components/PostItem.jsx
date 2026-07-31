import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="postcontent">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.content}
                </div>
            </div>
            <div className="postbtns">
                <MyButton>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;