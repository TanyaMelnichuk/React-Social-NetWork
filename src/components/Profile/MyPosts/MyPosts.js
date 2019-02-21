import React  from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = (props) => {
  return (
    <div>
      My post
      <div className={style.writeMessage}>
        <textarea cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hello, my name Tania" likesCount="30" />
        <Post message="Good, Kiss you" likesCount="10" />
      </div>
    </div>

  )
};

export default MyPosts;