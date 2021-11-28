import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { db } from '../../firebase/config';
import { AuthContext } from '../../store/firebasecontext';
function Chat() {
    const [messages,setMessages] = useState([]);
    const [newMessage,setNewMessage] = useState()
    const {user} = useContext(AuthContext)

    const d = new Date()
   let ida = d.toString()
const func = ()=>{
    db.collection('messages').orderBy('createdAt').limit(20).get()
    .then((snapshot) => {
        const data = snapshot.docs.map((doc) =>{
            console.log(doc.data());
            return {
                ...doc.data(),
                id:doc.id
            }
           })
           console.log(data);
           setMessages(data)
    }); 
}

useEffect(() => {
    func();
}, [db])

const handleOnChange = (e)=>{
    setNewMessage(e.target.value)
}
const handleOnSubmit = e =>{
    e.preventDefault()
    if(db){
        db.collection('messages').add({
            text: newMessage,
            createdAt: ida,
            id : user.uid
        }).then(() => func()); 
        setNewMessage('') 
    }
}
    return (
        <div>

           <div className="">
            {messages.map(({id,text})=>(

               <div className="">
               <p>{user.displayName}</p>
<h2>{text}</h2>
               </div> 
            ))}
            </div> 
            
            <input type="text" value={newMessage} onChange={handleOnChange}  />
            <button type="submit" onClick={handleOnSubmit} disabled={!newMessage} >Send</button>
        </div>
    )
}

export default Chat
