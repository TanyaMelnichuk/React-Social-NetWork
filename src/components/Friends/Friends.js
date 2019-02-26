import React from 'react';
import style from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let FriendsItem = props.state.friendsAll.map(
        (f, index) => <Friend key={index} id={f.id} name={f.name} avatar={f.avatar} />
    );

    return (
    <div className={`${style.contentPadding} ${style.friendsList}`}>
        { FriendsItem }
    </div>
    )

}

export default Friends;