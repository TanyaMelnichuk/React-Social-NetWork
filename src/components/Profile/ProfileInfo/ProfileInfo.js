import React  from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.banner}>
        <img src="/public/images/profile_banner.jpg.crdownload.jpg" alt="image" />
      </div>
      <div className="contentPadding">
        ava + description
      </div>
    </div>
  )
};

export default ProfileInfo;