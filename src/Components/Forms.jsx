import General from "./GeneralForm";
import Education from "./EducationForm";
import Experience from "./ExperienceForm";

function Forms({GeneralButton, EducationButton, ExperienceButton, setGeneral, setEducation, setExperience}) {
    return (
        <>
            <General />
            <Education />
            <Experience />
        </>
    )
}

export default Forms