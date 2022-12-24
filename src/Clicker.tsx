import { useState } from 'react'
import './style.css'

export const Clicker = () => {
  const [count, setCount] = useState(0);

    const incCount = () => setCount((c) => c + 1);
    const decCount = () => setCount((c) => c - 1)

  return (
    <div className='clicker'>
        <button onClick={decCount}> - </button>
          <p>{count}</p>
        <button onClick={incCount}> + </button>
    </div>
  )
}
