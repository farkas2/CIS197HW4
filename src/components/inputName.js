import React, { useState, useEffect } from 'react'

export default (props) => {
  return (
    <input type="text" value={props.input} onChange={e => props.setter(e.target.value)} />
  )
}