import React from 'react';
import s from './index.module.css'
import Messages from "./messages";
import FriendList from "./friendList";

const Chat = ({}) => {
    const mockData = [
        {id:1,message:'hei'},
        {id:2,message:'hei2'},
        {id:3,message:'hei3'},
        {id:4,message:'hei4'},
        {id:5,message:'hei5'},
        {id:6,message:'hei6'},
        {id:7,message:'hei6'},
        {id:8,message:'hei6'},
        {id:9,message:'hei6'},
        {id:10,message:'hei6'},
        {id:11,message:'hei6'},
    ]

    const friendList = [
        {id:1,name:'lado'},
        {id:2,name:'xvicha'},
        {id:3,name:'kvaracxelia'},
        {id:4,name:'asdasd'},
        {id:5,name:'sadfasdf'},
        {id:6,name:'sasdfas'},
    ]
    return (
        <div className={s.wrapper}>
            <div className={s.friendListWrapper}>
                <FriendList friends={friendList}/>
            </div>
            <div className={s.chatWrapper}>
                <Messages messages = {mockData}/>
            </div>
        </div>
    );
};

export default Chat;
