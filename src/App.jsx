import React, { useState } from 'react'
import { ImSpinner2 } from "react-icons/im";

const App = () => {

  const [state, setState] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  return (
    <div>

      <h1>Portfolio</h1>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinning {
          animation: spin 1s linear infinite;
        }
      `}</style>


      <button className='' onClick={() => {
        setState('clicked')
        setIsLoading(true)
        setTimeout(() =>{
           setIsLoading(false)
           setState('')

        } ,3000)

      }}>
        {isLoading?<ImSpinner2 className='spinning' />:''}  Click me
      </button>



      <p>Button state: {state}</p>
    </div>
  )
}

export default App
