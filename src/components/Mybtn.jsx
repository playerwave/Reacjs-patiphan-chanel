// eslint-disable-next-line no-unused-vars
import React from 'react'

function Mybtn() {

  function handleClick(){
    alert("Hellooooooo")
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me!!!</button>
    </div>
  )
}

export default Mybtn
