import "../Styles/Forms.css"
import { useState } from "react"
function Education() {
    const [EducationButton, setEducation] = useState(false)
    const clickHeading = () => {
        var newval = !(EducationButton)
        setEducation(newval)
    }
    return (
        EducationButton ? 
        <div className="edu">
        <button className="head" onClick={clickHeading}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>
        Educational Information</button>
        <form method="post">
            <div className="field">
                <label >School Name</label>
                <input type="text"  />
            </div>
            <div className="field">
                <label >Title of Study</label>
                <input type="text" />
            </div>
            <div className="field">
                <label >Date of Study</label>
                <input type="email" />
            </div>
        </form>
        <button>Edit</button>
        <button>Submit</button>
        </div>
        :
        <div>
            <button className="head" onClick={clickHeading}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>Educational Information</button>
        </div>
    )
}

export default Education