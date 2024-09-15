import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    // this block of code makes count increase by 1 every 2 seconds
    // getting rid of strictMode helps it count from 0-1 instead of jumping from 0 to 2
    // however, adding an empty dependency array will result in the callback function running only once. it no longer increases every 2 seconds
    // adding a 'count' to your dependency array will make it run once, then run the callback function every time the value of 'count' changes
    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
            console.log(count)
        }, 2000)
    }, [count])

  return (
    <div>
        <h1>I have rendered {count} times!</h1>
    </div>
  )
}

export default UseEffectExample