import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Home from './pages/Home'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 2500)

    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (isLoading) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: 'var(--bg-primary)',
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.7s ease-out',
        }}
      >
        <Loading />
      </div>
    )
  }

  return <Home />
}

export default App
