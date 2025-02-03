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
        <div className="flex-1 p-4 bg-gray-900 flex flex-col justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-700">
          <div className="flex-1 overflow-y-auto mb-4">
            <ul className="space-y-2 flex flex-col">
              {messages.map((msg, index) => (
                <li key={index} className="p-2 bg-blue-600 rounded-lg text-white w-max">{msg}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <input placeholder='Message...' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 bg-gray-700 text-white rounded-lg outline-none"
              />
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700" onClick={sendMessage}>Send Message</button>
          </div>
        </div>
    )
}