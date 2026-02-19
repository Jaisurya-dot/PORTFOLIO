import React, { useState } from 'react'
import Loading from './components/Loading';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {


  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()


  setTimeout(() => {
    setIsLoading(false)

  }, 4000)








  return (
    <>


      <Routes>
        <Route path="/" element={
          isLoading ? (
            <div className=' h-screen flex items-center justify-center bg-black'>
              <h1 className='text-white text-4xl font-bold'>Hello...</h1>
            </div>
          ) : (
            <div className=' h-screen flex items-center justify-center bg-black'>
              <Loading />
              {setTimeout(() => {
                navigate("/home") 
              }, 4000)}
            </div>
          )
        } />
        <Route path="/home" element={
          <Home/>
        } />
      </Routes>
    </>
  )
}



export default App
