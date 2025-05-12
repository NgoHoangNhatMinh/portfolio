import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='px-20'>
        <Header></Header>
        <main className='pt-16 flex flex-col items-center max-w-[80%] mx-auto py-8'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
