import React from 'react'
import "./Chat.css"; 
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            {/* chat views */}
             
            <Chat 
            name="Mark"
            message="Yaay whats up"
            timeStamp="40 seconds ago"
            profilePic="https://images.pexels.com/photos/4580470/pexels-photo-4580470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            /> 
             <Chat 
            name="Joe Biden"
            message="Wetin dey Sup"
            timeStamp="1 min ago"
            profilePic="https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
             <Chat 
            name="Jemilla"
            message="Ok"
            timeStamp="2 hours ago"
            profilePic="https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
             <Chat 
            name="Tayo"
            message="Abeg buy that thing come"
            timeStamp="1 day ago"
            profilePic="https://images.pexels.com/photos/4177733/pexels-photo-4177733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
        </div>
    )
}

export default Chats
