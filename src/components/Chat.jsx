import { useEffect, useState } from "react";
import socket from "./socket";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../slices/chatSlice";

export default function Chat() {
    const [message, setMessage] = useState("");
    const room = useSelector((state) => state.chat.room);
    const messages = useSelector((state) => state.chat.messages || []);
    const dispatch = useDispatch();
  
    const sendMessage = () => {
      if (message !== '' ){
        dispatch(addMessage(message))
        socket.emit("send_message", { message, room })
        setMessage("")
      }   
    }

    useEffect(() => {
      socket.on("recieve_message", (data) => {
        dispatch(addMessage(data.message))
      });

      return () => {
        socket.off('recieve_message');
      };
    }, [dispatch])
  
    return(
        <div>
          <h2>Room: {room}</h2>
            <input placeholder='Message...' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              />
            <button onClick={sendMessage}>Send Message</button>
            <h1>Messages</h1>
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
        </div>
    )
}