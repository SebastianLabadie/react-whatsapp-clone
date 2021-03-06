import React, { useState,useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import styled from 'styled-components'
import Pusher from 'pusher-js'
import axios from 'axios'
import Login from './components/Login';


const AppStyled = styled.div`
display:grid;
place-items:center;
height:100vh;
background:#dadbd3;
.app-container{
  display:flex;
  background:#ededed;
  margin-top:-50px;
  width:90%;
  height:90%;
  box-shadow:-1px 4px 20px -6px rgba(0,0,0,0.75);
}
`

function App() {
  const [messages,setMessages] = useState([])
  const [name,setName] = useState('')
  const getMessages=async ()=>{
    const  ENDPOINT= 'https://wpp-clone.herokuapp.com'
    const res = await axios.get(ENDPOINT+'/messages/sync')
    setMessages(res.data)
  }
  useEffect(()=>{
    getMessages()
  },[])
 


  useEffect(()=>{
    Pusher.logToConsole = true;

    const pusher = new Pusher('6d4c6e83bbfb9db71094', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');

    channel.bind('inserted', (newMessage) => {
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind()
      channel.unsubscribe()
    }
  },[messages])


    console.log(messages)
  return (
    <AppStyled >
      <div className="app-container">
        <Login setName={setName}/>
      <Sidebar />
      <Chat messages={messages} name={name}/>
      </div>
    </AppStyled>
  );
}

export default App;
