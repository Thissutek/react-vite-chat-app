# Chat Application (React/Vite + Socket.IO + Redux)

## Overview
This is a simple chat application built using React for the frontend, Socket.IO for real-time communication, and Redux for state management. The application allows users to:

- Join a specific chat room by entering a room name.
- Send messages to others in the same chat room.
- View messages in real-time as they are sent.
- Manage the state of the application (room and messages) with Redux.

This is the foundation of a real-time chat application, which can be extended with additional features.

---

## Technologies Used
- **React**: Frontend library for building the user interface.
- **Socket.IO**: Enables real-time, bi-directional communication between clients and the server.
- **Redux**: Manages the state of the application, specifically for handling the room and messages
- **Node.js**: Server-side runtime environment (optional if using a backend).

---

## How It Works
1. **Join a Room**: Users enter a room name to join a chat room. The room is stored in the Redux state.
2. **Send Messages**: Messages typed by users are sent to the server using Socket.IO and broadcasted to all other users in the same room. These messages are stored in Redux and displayed in real-time.
3. **Receive Messages**: Messages from other users in the room are displayed instantly using Redux to manage the state of the messages.

---

## Features
- **Join Rooms**: Users can join different chat rooms by entering a room name.
- **Real-time Messaging**: Messages are sent and received instantly within the chat room.
- **Room Isolation**: Messages are confined to the specific room a user joins.
- **State Mangement with Redux**: Redux is used to manage the applications's state, including the current room and the list of messages
---

## Installation
### Prerequisites
- Node.js installed on your system.
- Basic understanding of React, Redux and Socket.IO.

### Steps to Run the Application
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. Install dependencies for both frontend and backend (if applicable):
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Start the backend server:
   ```bash
   cd server
   node index.jsx
   ```

4. Start the React frontend:
   ```bash
   cd client
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Planned Features
This application is a starting point and will be expanded with the following features:

1. **User Authentication**: Add a login/signup system to identify users.
2. **Private Messaging**: Enable users to send direct messages to each other.
3. **Typing Indicator**: Show when a user is typing in the chat room.
4. **Message Persistence**: Store chat messages in a database so they are not lost when the server restarts.
5. **File Sharing**: Allow users to share files (images, documents, etc.) in chat rooms.
6. **Room Management**: Create features for managing rooms, such as creating, renaming, or deleting rooms.
7. **Styling Enhancements**: Improve the UI using Tailwind CSS or other styling libraries.
8. **Mobile Responsiveness**: Ensure the application works seamlessly on all device sizes.

---

## Folder Structure
```
chat-app/
|-- client/        # Frontend code (React)
|   |-- src/
|       |-- components/  # Reusable components
|       |-- App.js       # Main React component
|       |-- index.js     # React entry point
|-- server/        # Backend code (Socket.IO server)
|   |-- index.js   # Main server file
|-- README.md      # Documentation
|-- package.json   # Dependency manager file
```

---

## Contributions
Contributions are welcome! Feel free to open issues or submit pull requests if you have ideas for new features or improvements.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

