import React from 'react'
import styled from 'styled-components'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

const ChatFooterStyled = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:62px;
    border-top:1px solid lightgray;

    .MuiSvgIcon-root{
        margin:0 10px;
        color:gray;
    }
    form{
        flex:1;
        display:flex;
        input{
            flex:1;
            padding:10px;
            border-radius:30px;
            border:none;
            outline:none;
        }
        button{
            display:none;
        }
    }
    
`
const ChatFooter = () => {
    return (
        <ChatFooterStyled>
            <InsertEmoticonIcon />
            <form >
                <input 
                type="text"
                placeholder="Type a message"
                />
                <button type="submit">
                    Send Message
                </button>
            </form>
            <MicIcon />

        </ChatFooterStyled>
    )
}

export default ChatFooter
