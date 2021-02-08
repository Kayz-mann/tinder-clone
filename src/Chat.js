import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";
import { Link } from "react-router-dom";


function Chat({ name, messages, profilePic, timestamp }) {
    return (
        // the link is for clicking message.name to see full chats
        <Link to={`/chat/${name}`}>
        <div className="chat">
            {/* chat rows */}
            <Avatar className="chat__image" alt={name} src={profilePic} />
         <div className="chat__details">
             <h2>{name}</h2>
             <p>{messages}</p>
         </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}
 
export default Chat
