import React from 'react';
import s from '../index.module.css'
const Messages = ({messages}) => {
    return (
        <>
            {messages.map(item => {
                return (
                    <div className={s.message} key={item.id}>
                        {item.message}
                    </div>
                )
            })}
        </>
    );
};

export default Messages;
