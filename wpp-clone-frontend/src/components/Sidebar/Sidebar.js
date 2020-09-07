import React from 'react'
import styled from 'styled-components'
import SidebarHeader from './SidebarHeader'
import SidebarSearch from './SidebarSearch'
import SidebarChat from './SidebarChat'
const SidebarStyled = styled.div`
flex:.35;
display:flex;
flex-direction:column;

`

const Sidebar = () => {
    return (
        <SidebarStyled>
               <SidebarHeader />
               <SidebarSearch />
               <SidebarChat />
        </SidebarStyled>
    )
}

export default Sidebar
