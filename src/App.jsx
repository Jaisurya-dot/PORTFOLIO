import React, { useState } from 'react'
import { ImSpinner2 } from "react-icons/im";
import Loading from './components/Loading';

const App = () => {


  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 4000)

  return (
    <>

      {isLoading && (

        <div className=' h-screen flex items-center justify-center bg-black'>
          <Loading />
        </div>
      )}
    </>
  )
}



export default App
