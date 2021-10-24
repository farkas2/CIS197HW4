import React, { useState, useEffect} from 'react'
import Updoot from './updooter'
import Reply from './reply'

export default (props) => {

  //hook for whether or not to show response fields
  const [showPost, setShowPost] = useState(false)
  
  function handleReply() {
    setShowPost(!showPost)
  } 

  function handleReplySubmit() {
    console.log('entering')
  } 

  if (props.depth === 0) {
  // Base case
    
  // when 'reply' is clicked, add the 'reply' component
  // setter for the replier's name
  const [replyName, setInput11] = useState('Enter your name...')

  //setter for the repliers's comment
  const [replyPost, setInput21] = useState('Write your post...')

  const title = 'Response to ' + props.name + '\'s post:'
  if (showPost) {
    return (<>
    <div
            style={
            {
            border: '2px solid black',
            width: '150px'
            }
          }
      >
      <b>Name : {props.name}</b> 
      <br></br>
      Comment: {props.comment} 
      <Updoot/>
      <br></br>
      <button onClick={() => {handleReply()}}>Reply</button>
      <br></br>
      <Reply title={title} userName={replyName} changeUserName={setInput11} userPost={replyPost} changeUserPost={setInput21} handleSubmit={() => {handleReplySubmit()}}/>
      </div>
      </>)
  } else {
    return (
      <>
       <div
            style={
            {
            border: '2px solid black',
            width: '150px'
            }
        }
        >
      <b>Name : {props.name}</b> <br></br>
      Comment: {props.comment} 
      <Updoot/>
      <br></br>
      <button onClick={() => {handleReply()}}>Reply</button>
      </div>
      </>
      )
  }
  } else {
    console.log("Props > 0 passed in")
  }
}