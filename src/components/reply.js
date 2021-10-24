import React, { useState, Button } from 'react'
import InputName from './inputName'
import InputPost from './inputPost'

const reply = props => (
  (
    <>
      <b>{props.title}</b>
      <section>
        <InputName input={props.userName} setter={props.changeUserName} />
      </section>
      <section>
        <InputPost input={props.userPost} setter={props.changeUserPost} />
      </section>
      <button type="button" onClick={props.handleSubmit}> Submit </button>
    </>
  )
)
export default reply
