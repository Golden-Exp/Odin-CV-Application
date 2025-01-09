import "../Styles/Forms.css"
import { useState } from "react"
function Experience({ SavedExperience, saveExperience }) {
        const [ExpButton, setExpButton] = useState(false)
        const [NewExp, setNewExp] = useState({})
        const [Edit, setEdit] = useState(true)
        const clickHeading = () => {
            setExpButton(!ExpButton)
            setEdit(false)
        }
        const handleChange = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            setNewExp((prevSave) => ({...prevSave, [field]:value}))
        }
        const clickSave = () => {
            const institute = {...NewExp, id:crypto.randomUUID()}
            saveExperience((prevSave) => [...prevSave, institute])
            setEdit(false)
        }
        const clickAdd = () => {
            setNewExp({})
            setEdit(true)
        }

        const clickCancel = () => {
            setNewExp({})
            setEdit(false)
        }

        const clickDelete = (id) => {
            saveExperience((prevSave) => prevSave.filter((item) => item.id != id))
        }

        return (
            ExpButton == false ?
            <div>
                <button className="head" onClick={clickHeading}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>Experience Information</button>
            </div>
            :
            Edit == true ?
            <div>
                <button className="head" onClick={clickHeading} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>Experience Information</button> 
                <form>
                    <div className="field">
                        <label>Company Name</label>
                        <input name="CompanyName" defaultValue={NewExp.CompanyName} onChange={handleChange} ></input>
                    </div>
                    <div className="field">
                        <label>Position</label>
                        <input name="Position" defaultValue={NewExp.Position} onChange={handleChange} ></input>
                    </div>
                    <div className="field">
                        <label>Responsibilities</label>
                        <input name="Responsibilities" defaultValue={NewExp.Responsibilities} onChange={handleChange} ></input>
                    </div>
                    <div className="field">
                        <label>Start date</label>
                        <input name="StartDate" defaultValue={NewExp.StartDate} onChange={handleChange} placeholder="DD/MM/YY" ></input>
                    </div>
                    <div className="field">
                        <label>End Date</label>
                        <input name="EndDate" defaultValue={NewExp.EndDate} placeholder="DD/MM/YY" onChange={handleChange} ></input>
                    </div>
                </form>
                <button onClick={clickCancel} >Cancel</button>
                <button onClick={clickSave} >Save</button>
            </div>
            :
            <div>
                <button className="head" onClick={clickHeading} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>Experience Information</button>
                <ul className="list" >
                    {SavedExperience.map((institute) => (
                        <li key={institute.id} >
                            <button className="ListButton">{institute.CompanyName}</button>
                            <button className="ListButton" onClick={() => clickDelete(institute.id)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></button>
                        </li>
                    ))}
                </ul>
                <button onClick={clickAdd} >Add</button>
            </div>
        )
}

export default Experience