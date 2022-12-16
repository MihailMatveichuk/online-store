import { useState } from 'react'

export const Clicker = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  )
}
