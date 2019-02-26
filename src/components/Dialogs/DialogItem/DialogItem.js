import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return(
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.active}>
          <div>
              <img src={props.avatar} alt="avatar" className={style.avatar} />
          </div>
          <div className={style.name} >{props.name}</div>
      </NavLink>
    </div>
  )
};


export default DialogItem;