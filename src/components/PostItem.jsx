import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
            <div className="postcontent">
                <strong>1. TypeScript</strong>
                <div>
                    TypeScript - надстройка над JS
                </div>
            </div>
            <div className="postbtns">
                <button className="btn">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;