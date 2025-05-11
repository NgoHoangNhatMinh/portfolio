import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <div style={{ backgroundColor: '#fdf6e3' }} className='px-20'>
        <Header></Header>
        <main className='pt-16 flex flex-col'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
