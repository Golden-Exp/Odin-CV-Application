import "../Styles/Forms.css"
import { useState } from "react"
function Experience() {
    const [ExperienceButton, setExperience] = useState(false)
    const clickHeading = () => {
        var newval = !(ExperienceButton)
        setExperience(newval)
    }
    return (
        ExperienceButton ?
        <div className="exp">
        <button className="head" onClick={clickHeading}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-up</title><path d="M7,15L12,10L17,15H7Z" /></svg>
        Practical Experience Information</button>
        <form method="post">
            <div className="field">
                <label >Company Name</label>
                <input type="text"  />
            </div>
            <div className="field">
                <label >Position Title</label>
                <input type="text" />
            </div>
            <div className="field">
                <label >Responsibilities</label>
                <input type="email" />
            </div>
            <div className="field">
                <label >Start Date</label>
                <input type="email" />
            </div>
        </form>
        <button>Cancel</button>
        <button>Save</button>
        </div>
        :
        <div>
            <button className="head" onClick={clickHeading}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>Practical Experience Information</button>
        </div>
    )
}

export default Experience