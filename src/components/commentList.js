import React, { useState, useEffect} from 'react'


import CommentBlock from './commentBlock'
// we want this to be a list of comment block

// Question 1: I need to pass in a list of comments to this function, then they get mapped 
    //each comment will be of the form {name: "testName", value : "testValue"}

    // so on press of "submit", I need to push a 

const commentList = (props) => {
    //for each comment, add the name, comment 
    let count = 0
    return props.commentList.map(x =>
    {   
     const str = "{comment" + count + "}";
     count += 1
     return <div key={str}> <CommentBlock name= {x.name} comment={x.comment} depth={0}/> </div>
    }
    )
}

export default commentList