import React  from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div className={style.banner}>
        <img src="https://jooinn.com/images/picture-3.jpg" alt="image" />
      </div>
      <div className={style.contentPadding}>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    </div>
  )
};

export default Profile;