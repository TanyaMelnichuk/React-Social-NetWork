import React  from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import state from "../../redux/state";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <div className="contentPadding">
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
                 addPost={state.addPost}
        />
      </div>
    </div>
  )
};

export default Profile;