import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <div 
        className="fixed inset-0 -z-10" 
        style={{
          background: 'linear-gradient(rgb(120, 140, 176) 0%, rgb(187, 199, 230) 100%)'
        }}    
      />
      <div className=''>
        <Header></Header>
        <main className='px-20 pt-28 flex flex-col items-center max-w-[80%] mx-auto py-8'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
