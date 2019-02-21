import React  from 'react';
import s from './Posts.module.css';

const Posts = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr" alt="avatar"/>
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
};

export default Posts;