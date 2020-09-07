import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import styled from 'styled-components'

const AppStyled = styled.div`
display:grid;
place-items:center;
height:100vh;
background:#dadbd3;
.app-container{
  display:grid;
  grid-template-columns:35% 65%;
  background:#ededed;
  margin-top:-50px;
  width:90%;
  height:90%;
  box-shadow:-1px 4px 20px -6px rgba(0,0,0,0.75);
}
`

function App() {
  return (
    <AppStyled >
      <div className="app-container">

      <Sidebar />
      <Chat />
      </div>
    </AppStyled>
  );
}

export default App;
