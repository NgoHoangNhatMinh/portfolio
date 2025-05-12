import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <div>
        <Header></Header>
        <main className='px-20 pt-16 flex flex-col items-center max-w-[80%] mx-auto py-8'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
