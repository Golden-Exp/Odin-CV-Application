import "../Styles/Resume.css"
function Resume({SavedGeneral, SavedEducation, SavedExperience}) {
    const EductionDeets = SavedEducation.map((institute) =>
        <div key={institute.id} className="eduField" >
            <div className="tit" >{institute.Title}</div>
            <div className="inst">{institute.SchoolName}
                <em>{institute.Date}</em>
            </div>
        </div>)
    const ExpDeets = SavedExperience.map((institute) => (
        <div key={institute.id} className="expField">
            <h2>{institute.CompanyName}</h2>
            <div className="roles" >
                <h4>{institute.Position}</h4>
                <h5>{institute.StartDate} - {institute.EndDate}</h5>
            </div>
            <div className="desc" >{institute.Responsibilities}</div>
        </div>  
    ))
    
    return (
        <div className="ResumeContainer">
            <h1>Preview</h1>
            <div className="preview">
                <div className="header">
                    <h1>{SavedGeneral.FirstName} {SavedGeneral.LastName}</h1>
                </div>
                <div className="info">
                    <div className="cont" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                        {SavedGeneral.PhoneNumber}
                    </div>
                    <div className="cont" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                        {SavedGeneral.mail}
                    </div>
                </div>
                <div className="others" >
                    <div className="edu" >
                        <h1>Education Info</h1>
                        {EductionDeets}
                    </div>
                    <div className="exp" >
                        <h1>Experience</h1>
                        {ExpDeets}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume