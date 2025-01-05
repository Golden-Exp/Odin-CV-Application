import "../Styles/Forms.css"
import { useState } from "react"
function General({ SavedGeneral, saveGeneral }) {
    const [GeneralButton, setGeneral] = useState(false)
    const [saved, setSaved] = useState(false)
    const [TempGeneralInfo, setTempGeneral] = useState(SavedGeneral)
    const clickHeading = () => {
        var newval = !(GeneralButton)
        setGeneral(newval)
    }
    const onCancel = () => {
        setSaved(true)
    }
    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setTempGeneral((prevSave) => ({...prevSave, [field]: value}))
    }
    const onSubmit = () => {
        setSaved(true)
        saveGeneral(TempGeneralInfo)
    }
    const onEdit = () => {
        setSaved(false)
    }
    return (
        GeneralButton ?
        saved ?
        <div>
            <form method="post">
            <div className="field">
                <label >First Name</label>
                <label className="op">{SavedGeneral.FirstName}</label>
            </div>
            <div className="field">
                <label >Last Name</label>
                <label className="op">{SavedGeneral.LastName}</label>
            </div>
            <div className="field">
                <label >Mail</label>
                <label className="op">{SavedGeneral.mail}</label>
            </div>
            <div className="field">
                <label >Phone Number</label>
                <label className="op">{SavedGeneral.PhoneNumber}</label>
            </div>
        </form>
        <button onClick={onEdit}>Edit</button>
        </div>
        :
        <div className="gen">
        <button 
        className="head"
        onClick={clickHeading}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>
        General Information</button>
        <form>
            <div className="field">
                <label >First Name</label>
                <input type="text" name="FirstName" defaultValue={SavedGeneral.FirstName} onChange={handleChange}/>
            </div>
            <div className="field">
                <label >Last Name</label>
                <input type="text" name="LastName" defaultValue={SavedGeneral.LastName} onChange={handleChange}/>
            </div>
            <div className="field">
                <label >Mail</label>
                <input type="email" name="mail" defaultValue={SavedGeneral.mail} onChange={handleChange}/>
            </div>
            <div className="field">
                <label >Phone Number</label>
                <input type="tel" pattern="[0-9]{10}" name="PhoneNumber" defaultValue={SavedGeneral.PhoneNumber} onChange={handleChange}/>
            </div>
        </form>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onSubmit}>Save</button>
        </div>
        :
        <div>
            <button className="head" onClick={clickHeading}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>General Information</button>
        </div>
    )
}

export default General