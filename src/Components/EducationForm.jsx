import "../Styles/Forms.css"
function Education() {
    return (
        <div className="edu">
        <h2>Educational Information</h2>
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
    )
}

export default Education