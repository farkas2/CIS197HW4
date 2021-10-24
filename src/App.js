import React, { useState } from 'react'
import Title from './components/Title'
import Post from './components/post'
import CommentList from './components/commentList'

const App = () => {
  // setter for the user's name
  const [userName, setInput] = useState('Enter your name...')

  // setter for the user's comment
  const [userPost, setInput2] = useState('Write your post...')

  const [commentList, setLs] = useState([])

  function handleSubmit() {
    // 1.) Push to the list of comments in App.js the following: {Name : InputName.value, Comment : InputComment.value}
    setLs([...commentList, { name: userName, comment: userPost }])
    // 2.) reset inputs to inputName and inputPost
    setInput('Enter your name...')
    setInput2('Write your post...')
  }
  return (
    <>
      <Title />
      <Post title="New Post" userName={userName} changeUserName={setInput} userPost={userPost} changeUserPost={setInput2} handleSubmit={handleSubmit} />
      <CommentList commentList={commentList} />
    </>
  )
}

export default App
