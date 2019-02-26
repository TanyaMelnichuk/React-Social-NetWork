import React  from 'react';
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friend from "../Friends/Friend/Friend";



const Nav = (props) => {

    let FriendsItem = props.state.friends.map(
        (f, index) => <Friend key={index} id={f.id} avatar={f.avatar} />
    );

    return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
      </div>
        <div className={`${style.item} ${style.friend}`}>
            <NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink>
            <div>
                { FriendsItem }
            </div>
        </div>
    </nav>
  )
};

export default Nav;