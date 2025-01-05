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
        <button className="head" onClick={clickHeading}>Practical Experience Information</button>
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
        <button>Edit</button>
        <button>Submit</button>
        </div>
        :
        <div>
            <button className="head" onClick={clickHeading}>Practical Experience Information</button>
        </div>
    )
}

export default Experience