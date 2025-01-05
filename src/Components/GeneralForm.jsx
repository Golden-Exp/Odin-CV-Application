import "../Styles/Forms.css"
import { useState } from "react"
function General() {
    const [GeneralButton, setGeneral] = useState(false)
    const clickHeading = () => {
        var newval = !(GeneralButton)
        setGeneral(newval)
    }
    return (
        GeneralButton ?
        <div className="gen">
        <button 
        className="head"
        onClick={clickHeading}
        >General Information</button>
        <form method="post">
            <div className="field">
                <label >First Name</label>
                <input type="text"  />
            </div>
            <div className="field">
                <label >Last Name</label>
                <input type="text" />
            </div>
            <div className="field">
                <label >Mail</label>
                <input type="email" />
            </div>
            <div className="field">
                <label >Phone Number</label>
                <input type="tel" pattern="[0-9]{10}" />
            </div>
        </form>
        <button>Edit</button>
        <button>Submit</button>
        </div>
        : 
        <div>
            <button className="head" onClick={clickHeading}>General Information</button>
        </div>
    )
}

export default General