import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    // this block of code makes count increase by 1 every 2 seconds
    // getting rid of strictMode helps it count from 0-1 instead of jumping from 0 to 2
    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
            console.log(count)
        }, 2000)
    })

  return (
    <div>
        <h1>I have rendered {count} times!</h1>
    </div>
  )
}

export default UseEffectExample