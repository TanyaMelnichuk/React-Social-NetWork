import React  from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.banner}>
        <img src="https://jooinn.com/images/picture-3.jpg" alt="image" />
      </div>
      <div className="contentPadding">
        ava + description
      </div>
    </div>
  )
};

export default ProfileInfo;