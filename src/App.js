import React, { useState } from 'react'
import Title from './components/Title'
import Post from './components/post'
import CommentList from './components/commentList'
 
const App = () => {

  // have list of comments in here, rather than a list of emojis
  // look at input for emoji search, pass update funciton to that box 
  // pass states of input to results component


  // wondering if I should have the input fields and the button directly in App.js, so I can send the input 
  // and handle the button press directly here

  //user's post

  //setter for the user's name
  const [userName, setInput] = useState('Enter your name...')

  //setter for the user's comment
  const [userPost, setInput2] = useState('Write your post...')
  //console.log(setInput2)
  const [commentList, setLs] = useState([])

  function handleSubmit() {
    // 1.) Push to the list of comments in App.js the following: {Name : InputName.value, Comment : InputComment.value}
    //commentList.push({'name' : userName, 'comment' : userPost})

    //const [depth, setDepth] = useState(0)
    setLs([...commentList, {'name' : userName, 'comment' : userPost}])
    // 2.) reset inputs to inputName and inputPost 
    setInput('Enter your name...')
    setInput2('Write your post...')
  }

  //let commentList = []
  //current problem is that we WANT to re-render the commentList whenever anything gets pushed to it
return (
    <>
      <Title/>
      <Post title='New Post' userName={userName} changeUserName={setInput} userPost={userPost} changeUserPost={setInput2} handleSubmit={handleSubmit} />
      <CommentList commentList={commentList}/>
    </>
  ) 
}

// <CommentList comments={comments}/>
// <CommentList comments={ls}/>
// First we should try to just make the new post thing

export default App