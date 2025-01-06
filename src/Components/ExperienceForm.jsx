import "../Styles/Forms.css"
import { useState } from "react"
function Experience({ SavedExperience, saveExperience }) {
    const [ExperienceButton, setExperience] = useState(false)
    const [saved, setSaved] = useState(false)
    const [TempExpInfo, setTempExp] = useState(SavedExperience)
    const clickHeading = () => {
        var newval = !(ExperienceButton)
        setExperience(newval)
    }
    const onCancel = () => {
        setSaved(true)
    }
    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setTempExp((prevSave) => ({...prevSave, [field]:value}))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setSaved(true)
        saveExperience(TempExpInfo)
    }
    const onEdit = () => {
        setSaved(false)
    }
    return (
        ExperienceButton ?
        saved ?
        <div>
            <h2>Practical Experience Innformation</h2>
            <form method="post">
                <div className="field">
                    <label >Company Name</label>
                    <label className="op">{SavedExperience.CompanyName}</label>
                </div>
                <div className="field">
                    <label >Position Title</label>
                    <label className="op">{SavedExperience.Position}</label>
                </div>
                <div className="field">
                    <label >Responsibilities</label>
                    <label className="op">{SavedExperience.Responsibility}</label>
                </div>
                <div className="field">
                    <label >Start Date</label>
                    <label className="op">{SavedExperience.Date}</label>
                </div>
            </form>
            <button onClick={onEdit}>Edit</button>
        </div>
        :
        <div className="exp">
        <button className="head" onClick={clickHeading}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>
        Practical Experience Information</button>
        <form method="post">
            <div className="field">
                <label >Company Name</label>
                <input type="text" name="CompanyName" defaultValue={SavedExperience.CompanyName} onChange={handleChange} />
            </div>
            <div className="field">
                <label >Position Title</label>
                <input type="text" name="Position" defaultValue={SavedExperience.Position} onChange={handleChange} />
            </div>
            <div className="field">
                <label >Responsibilities</label>
                <input type="text" name="Responsibility" defaultValue={SavedExperience.Responsibility} onChange={handleChange} />
            </div>
            <div className="field">
                <label >Start Date</label>
                <input type="text" placeholder="DD/MM/YY" name="Date" defaultValue={SavedExperience.Date} onChange={handleChange} />
            </div>
        </form>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSubmit} >Save</button>
        </div>
        :
        <div>
            <button className="head" onClick={clickHeading}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>Practical Experience Information</button>
        </div>
    )
}

export default Experience