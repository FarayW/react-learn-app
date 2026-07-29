import React from 'react';

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
                <button className="btn">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;