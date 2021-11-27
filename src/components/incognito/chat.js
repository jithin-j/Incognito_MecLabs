import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../../firebase/config';
function Chat() {
    const [messages,setMessages] = useState([]);
useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50)
    .onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc=>doc.data))
    })
    
  
    
}, [])

    return (
        <div>
            
            {messages.map((id,text)=>{
               <div className="">
               <p>{id}</p>
<h2>{text}</h2>
               </div> 
            })}
        </div>
    )
}

export default Chat
