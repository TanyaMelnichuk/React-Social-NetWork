import React  from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://jooinn.com/images/picture-3.jpg" alt="image" />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
};

export default Profile;