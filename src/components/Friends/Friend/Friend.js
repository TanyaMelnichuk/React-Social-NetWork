import React from 'react';
import style from '../Friends.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {

    let path = "/friends/" + props.name;

  return (
    <div className={style.friend}>
        <NavLink to={path} activeClassName={style.active}>
            <div>
                <img src={props.avatar} alt="avatar" className={style.avatar} />
            </div>
            <div className={style.name} >{props.name}</div>
        </NavLink>

    </div>
  )

}

export default Friend;