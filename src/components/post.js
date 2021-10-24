import React, { useState, Button } from 'react'
import InputName from './inputName'
import InputPost from './inputPost'

const post = props => (
  <>
    <div
      style={
            {
              border: '2px solid black',
              width: '150px',
            }
        }
    >
      <b>{props.title}</b>
      <section>
        <InputName input={props.userName} setter={props.changeUserName} />
      </section>
      <section>
        <InputPost input={props.userPost} setter={props.changeUserPost} />
      </section>
      <button type="button" onClick={props.handleSubmit}>Submit</button>
    </div>
  </>
)
export default post
