// Import Styles
import style from "./TitleSection.module.css"

// Import Types
import type { TitleSectionType } from "../../types/TitleSectionType";

// Import React
import { Link } from "react-router";


// COMPONENT TITLE-SECTION
function TitleSection(props: TitleSectionType) {
    const {title, link} = props
    
    return (
        <h2  className={style.title}>
            {title}<Link to="/*">{link}</Link>
        </h2>
    );
};

export default TitleSection;