import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { db } from '../../firebase/config';
import { AuthContext } from '../../store/firebasecontext';
import { nameContext } from '../../store/name';
import '../stylesheet/chat.css'
import {FiSettings} from 'react-icons/fi'
import {BiDotsVerticalRounded} from 'react-icons/bi'
function Chat() {
    const [messages,setMessages] = useState([]);
    const [newMessage,setNewMessage] = useState()
    const {user} = useContext(AuthContext)
const {name} = useContext(nameContext)
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
            ida : user.uid
        }).then(() => func()); 
        setNewMessage('') 
    }
}
    return (
        <div className="chat">
        <div className="chathead"><div className=""><h2>React </h2></div>
        <div className="icons">
            <FiSettings />
            <BiDotsVerticalRounded />
        </div>
        </div>

           <div className="messages">

            {messages.map(({id,text})=>(

               <div className={id==user.uid ? 'my' : 'someone'}>
             
               <p>user : {user.uid}</p>
               

              
<h4>{text}</h4>
               </div> 
            ))}

            {/* {messages.map((use)=>{
                <div className={use.id==user.uid ? 'my' : 'someone'}>
                <p>user : {user.uid}</p>
               

              
<h4>{use.text}</h4>
                </div>
            })} */}
            </div> 
            
            <div className="textbox">
            <input id="textbox" type="text" value={newMessage} onChange={handleOnChange}  />
            <button className="btn1" type="submit" onClick={handleOnSubmit} disabled={!newMessage} >Send</button>
            </div>
        </div>
    )
}

export default Chat
