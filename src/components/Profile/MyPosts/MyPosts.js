import React  from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = (props) => {

  let postsElements = props.posts.map(
    p => <Post key={p.id} message={p.message} likesCount={p.likesCount} /> );

  return (
    <div>
      <h3>My post</h3>
      <div className={style.writeMessage}>
        <textarea cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={style.posts}>
        { postsElements }
      </div>
    </div>

  )
};

export default MyPosts;