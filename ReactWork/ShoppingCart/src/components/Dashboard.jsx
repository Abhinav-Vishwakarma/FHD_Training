import React, {useState,useEffect} from 'react'

function Dashboard() {
  const [counter,setCounter] = useState(0);
  useEffect(()=>{
    console.log(counter);
  });
  return (
    <div>
      <h1>Value:{counter}</h1>
      <button onClick={()=>{setCounter(counter + 1)}}>count</button>
    </div>
  )
}

export default Dashboard