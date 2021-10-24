import React, { useState, useEffect} from 'react'

export default () => {
    const [upCount, setCount] = useState(0)

    // useEffect( () => {
    // })
    return (
        <>
        <div>
            Vote count: {upCount}
            <button onClick= {() => setCount(upCount+1)}>
                Upvote
            </button>   
            <button onClick= {() => setCount(upCount-1)}>
                Downvote
            </button>
        
        </div>
        </>
    )
  }

