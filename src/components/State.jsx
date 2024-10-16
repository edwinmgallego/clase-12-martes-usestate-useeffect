import React, {useState,useEffect} from 'react'

const State = () => {
    const [state,setState]=useState(0)
useEffect(()=>{
    console.log(state)
},[])
    const handleClick=()=>{
        setState(state+1);
    }

  return (
    <>
    <div className='container text-center'>State</div>
    <hr />
    contador:{state}
    <button onClick={handleClick}>+1</button>
    </>
    
  )
}

export default State