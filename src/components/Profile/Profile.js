import React  from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <div className="contentPadding">
        <MyPosts posts={props.state.posts} />
      </div>
    </div>
  )
};

export default Profile;