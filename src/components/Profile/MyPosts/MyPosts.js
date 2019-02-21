import React  from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>

  )
};

export default MyPosts;