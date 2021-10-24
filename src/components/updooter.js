import React, { useState, useEffect } from 'react'

export default () => {
  const [upCount, setCount] = useState(0)
  return (
    <>
      <div>
        Vote count:
        {upCount}
        <button
          type="button"
          onClick={() => setCount(upCount + 1)}
        >
          Upvote
        </button>
        <button
          type="button"
          onClick={() => setCount(upCount - 1)}
        >
          Downvote
        </button>
      </div>
    </>
  )
}
