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

  let newMessage = React.createRef();

  let sendMessage = () => {
      let text = newMessage.current.value;
      alert(text);
  }


  return (
    <div className={`${style.contentPadding} ${style.dialogs}`}>
      <div className={style.dialogsItems}>
        { dialogsElement }
      </div>
      <div className={style.messages}>
        { messagesElements }
          <div className={style.newMessage}>
              <textarea cols="30" rows="10" ref={ newMessage } ></textarea>
              <button onClick={ sendMessage }>Send message</button>
          </div>
      </div>
    </div>
  )

};

export default Dialogs;