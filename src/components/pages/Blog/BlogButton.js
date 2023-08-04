import React from 'react'
import { blogButton } from '../../../data/blogData'

const BlogButton = ({ onHandleClick, dataIndex }) => {
  return (
    <React.Fragment>
        {blogButton.map((btn, index) => {
            return (
                <button
                key={index}
                className={dataIndex.current === index
                    ? 'blog__button__tabs blog__button__tabs-active'
                    : 'blog__button__tabs'
                }
                data-index={index}
                onClick={onHandleClick}
                >
                    {btn.title}
                </button>
            )
        })}
    </React.Fragment>
  )
}

export default BlogButton