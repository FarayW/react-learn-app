import React, {useState} from 'react';
import MySelect from "./UI/select/MySelect";

const PostFilter = (props) => {

    const {setPosts} = props;

    const [selectedSort, setSelectedSort] = useState('');

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts(prev => [...prev].sort((a, b) => a[sort].localeCompare(b[sort])));
    }


    return (
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
    );
};

export default PostFilter;