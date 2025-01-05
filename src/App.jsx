import './styles/App.css'
import Forms from './Components/Forms'
import { useState } from 'react'

function App() {

  return (
    <div className="container">
      <div className="forms">
        <Forms />
      </div>
      <div className='resume'></div>
    </div>
  )
}

export default App
