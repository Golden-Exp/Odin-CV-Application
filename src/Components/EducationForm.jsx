import "../Styles/Forms.css"
import { useState } from "react"
function Education({ SavedEducation, saveEducation }) {
        const [EduButton, setEduButton] = useState(false)
        const [NewEdu, setNewEdu] = useState({})
        const [Edit, setEdit] = useState(true)
        const clickHeading = () => {
            setEduButton(!EduButton)
            setEdit(false)
        }
        const handleChange = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            setNewEdu((prevSave) => ({...prevSave, [field]:value}))
        }
        const clickSave = () => {
            const institute = {...NewEdu, id:crypto.randomUUID()}
            saveEducation((prevSave) => [...prevSave, institute])
            setEdit(false)
        }
        const clickAdd = () => {
            setNewEdu({})
            setEdit(true)
        }

        const clickCancel = () => {
            setNewEdu({})
            setEdit(false)
        }

        const clickDelete = (id) => {
            saveEducation((prevSave) => prevSave.filter((item) => item.id != id))
        }

        const clickEdit = (id) => () => {
            console.log(id);
            const inst =  SavedEducation.find((institue) => institue.id === id)
            setNewEdu(inst)
        }

        return (
            EduButton == false ?
            <div>
                <button className="head" onClick={clickHeading}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>Education Information</button>
            </div>
            :
            Edit == true ?
            <div>
                <button className="head" onClick={clickHeading} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>Education Information</button> 
                <form>
                    <div className="field">
                        <label>School Name</label>
                        <input name="SchoolName" defaultValue={NewEdu.SchoolName} onChange={handleChange} ></input>
                    </div>
                    <div className="field">
                        <label>Title Of Study</label>
                        <input name="Title" defaultValue={NewEdu.Title} onChange={handleChange} ></input>
                    </div>
                    <div className="field">
                        <label>Date of Study</label>
                        <input name="Date" defaultValue={NewEdu.Date} placeholder="DD/MM/YY" onChange={handleChange} ></input>
                    </div>
                </form>
                <button onClick={clickCancel} >Cancel</button>
                <button onClick={clickSave} >Save</button>
            </div>
            :
            <div>
                <button className="head" onClick={clickHeading} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>Education Information</button>
                <ul className="list" >
                    {SavedEducation.map((institute) => (
                        <li key={institute.id} >
                            <button key={institute.id} className="ListButton" onClick={clickEdit} >{institute.SchoolName}</button>
                            <button className="ListButton" onClick={() => clickDelete(institute.id)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></button>
                        </li>
                    ))}
                </ul>
                <button onClick={clickAdd} >Add</button>
            </div>
        )
}

export default Education