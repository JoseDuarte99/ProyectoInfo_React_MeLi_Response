// Import Styles
import style from "./TitleSection.module.css"

// Import Types
import type { TitleSectionType } from "../../types/TitleSectionType";


// COMPONENT TITLE-SECTION
function TitleSection(props: TitleSectionType) {
    const {title, link} = props
    
    return (
        <h2  className={style.title}>
            {title}<a href="#">{link}</a>
        </h2>
    );
};

export default TitleSection;