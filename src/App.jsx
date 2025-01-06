import './styles/App.css'
import Forms from './Components/Forms'
import Resume from './Components/Resume'
import { useState } from 'react'

function App() {

  const [SavedGeneral, saveGeneral] = useState({saved:false})
  const [SavedExperience, saveExperience] = useState({saved:false})
  const [SavedEducation, saveEducation] = useState({saved:false})
  return (
    <div className="container">
      <div className="forms">
        <Forms 
        SavedGeneral={SavedGeneral}
        saveGeneral={saveGeneral}
        SavedEducation={SavedEducation}
        saveEducation={saveEducation}
        SavedExperience={SavedExperience}
        saveExperience={saveExperience}
        />
      </div>
      <div className='resume'>
        <Resume />
      </div>
    </div>
  )
}

export default App
