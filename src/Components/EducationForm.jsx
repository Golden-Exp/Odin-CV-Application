import "../Styles/Forms.css"
import { useState } from "react"
function Education({ SavedEducation, saveEducation }) {
        const [NewEdu, setNewEdu] = useState({})
        const [Edit, setEdit] = useState(true)
        const handleChange = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            setNewEdu((prevSave) => ({...prevSave, [field]:value}))
        }
        const clickSave = () => {
            const institute = {...NewEdu, id:uuidv4()}
            saveEducation((prevSave) => ([...prevSave, institute]))
        }

        return (
            Edit == true ?
            <div>
                <button className="head">Education Information</button> 
                <form>
                    <div className="field">
                        <label>School Name</label>
                        <input name="SchoolName" defaultValue={NewEdu.SchoolName} ></input>
                    </div>
                    <div className="field">
                        <label>Title Of Study</label>
                        <input name="Title" defaultValue={NewEdu.Title} ></input>
                    </div>
                    <div className="field">
                        <label>Date of Study</label>
                        <input name="Date" defaultValue={NewEdu.Date} ></input>
                    </div>
                </form>
                <button>Cancel</button>
                <button>Save</button>
            </div>
            :
            <div>
                <ul>
                    {SavedEducation.map((institue) => (
                        <button>
                            <li key={institue.id}>{institue.SchoolName}</li>
                        </button>
                    ))}
                </ul>
            </div>
        )
}

export default Education