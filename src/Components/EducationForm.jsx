import "../Styles/Forms.css"
import { useState } from "react"
function Education({ SavedEducation, saveEducation }) {
    const [EducationButton, setEducation] = useState(false)
    const [saved, setSaved] = useState(false)
    const [TempEducationInfo, setTempEducation] = useState(SavedEducation)
    const clickHeading = () => {
        var newval = !(EducationButton)
        setEducation(newval)
    }
    const onCancel = () => {
        setSaved(true)
    }
    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setTempEducation((prevSave) => ({...prevSave, [field]: value}))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setSaved(true)
        saveEducation(TempEducationInfo)
    }
    const onEdit = () => {
        setSaved(false)
    }
    return (
        EducationButton ?
        saved ?
        <div>
            <form method="post">
            <div className="field">
                <label >School Name</label>
                <label className="op">{SavedEducation.SchoolName}</label>
            </div>
            <div className="field">
                <label >Title of Study</label>
                <label className="op">{SavedEducation.Title}</label>
            </div>
            <div className="field">
                <label >Date of Study</label>
                <label className="op">{SavedEducation.Date}</label>
            </div>
        </form>
        <button onClick={onEdit}>Edit</button>
        </div>
        :
        <div className="edu">
        <button className="head" onClick={clickHeading}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>
        Educational Information</button>
        <form method="post">
            <div className="field">
                <label >School Name</label>
                <input type="text"  name="SchoolName" defaultValue={SavedEducation.SchoolName} onChange={handleChange} />
            </div>
            <div className="field">
                <label >Title of Study</label>
                <input type="text" name="Title" defaultValue={SavedEducation.Title} onChange={handleChange} />
            </div>
            <div className="field">
                <label >Date of Study</label>
                <input type="email" name="Date" placeholder="DD/MM/YY" defaultValue={SavedEducation.Date} onChange={handleChange} />
            </div>
        </form>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSubmit}>Save</button>
        </div>
        :
        <div>
            <button className="head" onClick={clickHeading}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>Educational Information</button>
        </div>
    )
}

export default Education