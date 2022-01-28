import React, { useEffect, useRef, useState } from 'react';
import './message.css';
import Messagebox from './Messagebox';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import db from './firebase.js';
import firebase from 'firebase'

function Message() {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')
    const scrollRef = useRef()

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    useEffect(() => {
        setUsername(prompt('Enter your username here'))
    }, [])
    
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const sendHandler = (e) => {
        e.preventDefault()

        db.collection(`messages`).add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        setInput('')
    }

    return <div className='message'>
                <div className='header'>
                    <img src='https://www.shareicon.net/data/2016/08/01/640145_message_512x512.png' />
                    <h2>Welcome to CONNECT "{ username }"</h2>
                </div>
                <div className='input__sec'>
                    <form>
                        <input type="text" value={input} onChange={(e) =>
                    setInput(e.target.value)} placeholder='Enter your message...' />
                        <IconButton disabled={!input} type='submit' color="primary" onClick={sendHandler}>
                            <SendIcon/>
                        </IconButton>
                    </form>
                </div>
                <div className='message__sec'>
            {messages.map(message => (
                        <div ref = {scrollRef}>
                            <Messagebox username={username} message={message} />
                        </div>
                    ))}
                </div>
    </div>;
}

export default Message;
