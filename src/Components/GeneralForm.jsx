import "../Styles/Forms.css"
function General() {
    return (
        <div className="gen">
        <h2>General Information</h2>
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
    )
}

export default General