import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map(
      (d, index) => <DialogItem key={index} name={d.name} id={d.id} avatar={d.avatar} /> );

  let messagesElements = props.state.messages.map(
      (m, index) => <Message key={index} message={m.message}/>
  );

  return (
    <div className={`${style.contentPadding} ${style.dialogs}`}>
      <div className={style.dialogsItems}>
        { dialogsElement }
      </div>
      <div className={style.messages}>
        { messagesElements }
      </div>
    </div>
  )

};

export default Dialogs;