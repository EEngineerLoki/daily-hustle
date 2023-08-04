import { useState, useRef } from 'react';
import { blogData } from '../../../data/blogData';

const BlogTabs = () => {
    const [isTransition, setIsTransition] = useState(false);
    const [blogDisplay, setBlogDisplay] = useState(blogData[0]);
    const dataIndex = useRef(0);
    const transition = 900;

    const onHandleClick = event => {
        const currIndex = +event.target.dataset.index;
        if (isTransition || dataIndex.current === currIndex) return;

        dataIndex.current = currIndex;
        setIsTransition(!isTransition);

        setTimeout(() =>{
            setIsTransition(false);
        }, transition);

        setTimeout(() => {
            setBlogDisplay(blogData[currIndex]);
        }, transition / 3);

        return currIndex;
    };

    return { onHandleClick, blogDisplay, isTransition, dataIndex };
};

export default BlogTabs
