import React, { useState, useEffect } from 'react'
import CommentBlock from './commentBlock'

const commentList = props => {
  let count = 0
  return props.commentList.map(x => {
    const str = `{comment${count}}`
    count += 1
    return (
      <div key={str}>
        <CommentBlock name={x.name} comment={x.comment} depth={0} />
      </div>
    )
  })
}

export default commentList
