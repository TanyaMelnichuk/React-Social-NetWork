import React  from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = (props) => {


  let postsElements = props.posts.map(
    p => <Post key={p.id} message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
      props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
      props.updateNewPostText(text);
  };

  return (
    <div>
      <h3>My post</h3>
      <div className={style.writeMessage}>
        <textarea cols="30" rows="10" onChange={onPostChange} ref={ newPostElement } value={ props.newPostText }></textarea>
        <button onClick={ addPost } > Add post </button>
        <button>Remove post</button>
      </div>
      <div className={style.posts}>
        { postsElements }
      </div>
    </div>

  )
};

export default MyPosts;