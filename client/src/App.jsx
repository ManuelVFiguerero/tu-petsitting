import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mt-5 ml-5 rounded-full border-red-200 border-2 shadow-xl bg-gradient-to-r from-red-500 to-blue-500 w-64'>
        <div className='flex flex-row gap-12 items-center'>
          <div className='flex flex-col p-5 text-center'>
            <p>Usuario</p>
            <p>Random</p>
          </div>

          <div className='flex flex-col p-5 text-center'>
            <p>Eval</p>
            <p>Cali</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
