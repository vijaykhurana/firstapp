import React from 'react'
import { useState } from 'react'
const CounterButton = () => {
  const [numberOfClicks,setNumberOfClicks] = useState(0)
    function increment() {
        setNumberOfClicks(numberOfClicks + 1)
    }

    return (
    <div>
        CounterButton
        <button onClick={increment}>Click Counter</button>
        <p>You clicked {numberOfClicks} times</p>
    </div>
  )
}

export default CounterButton