import { useState } from 'react'
import './style.css'

export const Clicker = () => {
  const [count, setCount] = useState(0);

    const incCount = () => setCount((c) => c + 1);
    const decCount = () => setCount((c) => (c <= 0 ? 0 : c - 1));


  return (
    <div className='clicker'>
        <button onClick={decCount}> - </button>
        <p>{count}</p>
        <button onClick={incCount}> + </button>
    </div>
  )
}


 // const  = products.filter((el) => el.category === filtered[0]?.category)
  //   useEffect(() => {
  //     const queryString = qs.stringify({
  //       category: filtered[0]?.category,
  //     });
  //     console.log(queryString);
  //     navigate(`?${queryString}`);
  //   }, []);

  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     category: 'cat',
  //   });
  //   console.log(queryString);
  //   navigate(`?${queryString}`);
  // }, []);
