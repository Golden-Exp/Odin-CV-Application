import "../Styles/Forms.css"
function Experience() {
    return (
        <div className="exp">
        <h2>Practical Experience Information</h2>
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
    )
}

export default Experience