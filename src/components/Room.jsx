import {useState} from 'react';
import socket from './socket';
import { setRoom } from '../slices/chatSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Room() {
    const [roomInput, setRoomInput] = useState("");
    const dispatch = useDispatch();
    const room = useSelector((state) => state.chat.room);

    const joinRoom = () => {
        if(roomInput !== "") {
          dispatch(setRoom(roomInput));
          socket.emit("join_room", roomInput);
        }
      }

    return(
        <div className='bg-gray-800 p-4 shadow-lg h-full flex flex-col'>  
          <h2 className="text-xl font-semibold text-white">Room: {room}</h2>
             <input className='p-2 bg-gray-700 text-white rounded-lg outline-none mb-4' placeholder='Room Number...' onChange={(event) => {
                setRoomInput(event.target.value);
            }}></input>
        <button className='p-2 bg-blue-600 text-black rounded-lg' onClick={joinRoom}>Join Room</button>
        </div>
    )
}