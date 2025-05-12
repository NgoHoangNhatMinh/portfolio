import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Loading from './components/Loading'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
      <Loading className={`${loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-200`}></Loading>
      <div 
        className="fixed inset-0 -z-10" 
        style={{
          background: 'linear-gradient(rgb(120, 140, 176) 0%, rgb(187, 199, 230) 100%)'
        }}    
      />
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
        <Header></Header>
        <main className='px-20 pt-28 flex flex-col items-center max-w-[80%] mx-auto py-8'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
