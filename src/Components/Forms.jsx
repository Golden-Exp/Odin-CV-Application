import General from "./GeneralForm";
import Education from "./EducationForm";
import Experience from "./ExperienceForm";

function Forms({SavedGeneral, saveGeneral, SavedEducation, saveEducation, SavedExperience, saveExperience}) {
    return (
        <>
            <General SavedGeneral={SavedGeneral} saveGeneral={saveGeneral} />
            <Education SavedEducation={SavedEducation} saveEducation={saveEducation} />
            <Experience SavedExperience={SavedExperience} saveExperience={saveExperience} />
        </>
    )
}

export default Forms