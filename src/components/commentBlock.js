import React, { useState, useEffect } from 'react'
import Updoot from './updooter'
import Reply from './reply'

const commentBlock = props => {
  const [showPost, setShowPost] = useState(false)

  function handleReply() {
    setShowPost(!showPost)
  }

  function handleReplySubmit() {
    // this is the block where I would increment the depth I believe
  }

  if (props.depth === 0) {
  // Base case
  // when 'reply' is clicked, add the 'reply' component
    const [replyName, setInput11] = useState('Enter your name...')

    // setter for the repliers's comment
    const [replyPost, setInput21] = useState('Write your post...')

    const title = `Response to ${props.name} 's post:`
    if (showPost) {
      return (
        <>
          <div
            style={
            {
              border: '2px solid black',
              width: '150px',
            }
          }
          >
            <b>
              Name :
              {props.name}
            </b>
            Comment:
            {props.comment}
            <Updoot />
            <button
              type="button"
              onClick={() => {
                handleReply()
              }}
            >
              Reply
            </button>
            <br />
            <Reply
              title={title}
              userName={replyName}
              changeUserName={setInput11}
              userPost={replyPost}
              changeUserPost={setInput21}
              handleSubmit={() => {
                handleReplySubmit()
              }}
            />
          </div>
        </>
      )
    }
    return (
      <>
        <div
          style={
            {
              border: '2px solid black',
              width: '150px',
            }
        }
        >
          <b>
            Name :
            {props.name}
          </b>
          <br />
          Comment:
          {props.comment}
          <Updoot />
          <br />
          <button
            type="button"
            onClick={() => {
              handleReply()
            }}
          >
            Reply
          </button>
        </div>
      </>
    )
  }
  return null
}

export default commentBlock
