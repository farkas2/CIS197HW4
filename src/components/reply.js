import React, { useState } from 'react'
import { Button } from 'react'
import InputName from './inputName'
import InputPost from './inputPost'

const reply = (props) => {
  //(userName, changeUserName, userPost, changeUserPost)
    // const [input, setInput] = useState('Name...')
    // const [input2, setInput2] = useState('Post...')
    
    return (
        <>
        <b>{props.title}</b>
        <section>
        <InputName input={props.userName} setter={props.changeUserName}/> 
        </section>
        <section>
        <InputPost input={props.userPost} setter={props.changeUserPost}/> 
        </section> 
        <button onClick={props.handleSubmit}>Submit</button> 
        </>
      // <input type="text" value={setInput} onChange={e => changeUserInput(e.target.value)} />
    )
  }

  // in the app tehre will be  alist of comments,
  // will want to put the comments into an array, for each comment (has name and comment fields)

  // comment block will be it's on 
export default reply