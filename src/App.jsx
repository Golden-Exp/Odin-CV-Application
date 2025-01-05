import './styles/App.css'
import Forms from './Components/Forms'
import Resume from './Components/Resume'
import { useState } from 'react'

function App() {

  return (
    <div className="container">
      <div className="forms">
        <Forms />
      </div>
      <div className='resume'>
        <Resume />
      </div>
    </div>
  )
}

export default App
