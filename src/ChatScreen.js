import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatScreen.css";

function ChatScreen() {
    // this is where we have the chat database
    // pushing chat messages from input to screen step 1
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Mark",
            image: "https://images.pexels.com/photos/4580470/pexels-photo-4580470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            message: "Yaay whats up"
        },
        {
            name:"Joe Biden",
            image: "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            message:"Wetin dey Sup",
        },
        {
            message: "How is it going !"
        },

    ]);

    // pushing chat messages from input to screen step 5
     const handleSend = e => {
         e.preventDefault();
        //  set messages push messages without deleting the data set in the json
         setMessages([ ...messages, { message: input }]);
         setInput("");
     }

    return (
        <div className="chatScreen">
           
               <p className="chatScreen__timestamp">
                YOU MATCHED WITH MARK ON 10/08/2020
                </p>
                {/* for every single message mapthrough a div with a p tag message.message */}
                {/* if message comes with name display avater ... if not display message only message .message */}
                {messages.map((message) => 
                    message.name ? (
                        <div className="chatScreen__message">
                        <Avatar 
                           className="chatScreen__image"
                           alt={message.name}
                           src={message.image} 
                           />
                       <p className="chatScreen__text">{messages.message}</p>
                   </div>
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{messages.message}</p>
                        </div>
                    
                    )
                )}
                
                    <form className="chatScreen__input">
                        <input 
                         // pushing chat messages from input to screen step 2
                        value={input}
                        // pushing chat messages from input to screen step 3
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField" 
                        placeholder="Type a message ..."
                        type="text"
                        />
                         {/* pushing chat messages from input to screen step 4 */}
                        <button onClick={handleSend}  type="submit" className="chatScreen__input">SEND </button>
                    </form>

              
            
        </div>
    )
}

export default ChatScreen
