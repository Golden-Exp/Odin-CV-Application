import General from "./GeneralForm";
import Education from "./EducationForm";
import Experience from "./ExperienceForm";

function Forms({SavedGeneral, saveGeneral}) {
    return (
        <>
            <General SavedGeneral={SavedGeneral} saveGeneral={saveGeneral} />
            <Education />
            <Experience />
        </>
    )
}

export default Forms