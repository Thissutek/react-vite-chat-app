import {useState} from 'react';
import socket from './socket';
import { setRoom } from '../slices/chatSlice';
import { useDispatch } from 'react-redux';

export default function Room() {
    const [roomInput, setRoomInput] = useState("");
    const dispatch = useDispatch();

    const joinRoom = () => {
        if(roomInput !== "") {
          dispatch(setRoom(roomInput));
          socket.emit("join_room", roomInput);
        }
      }

    return(
        <div>  
             <input placeholder='Room Number...' onChange={(event) => {
                setRoomInput(event.target.value);
            }}></input>
        <button onClick={joinRoom}>Join Room</button>
        </div>
    )
}