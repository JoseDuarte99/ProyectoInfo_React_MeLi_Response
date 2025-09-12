// Import Styles
import style from "./SectionCard.module.css"

// Import Types
import type { SectionCardType } from "../../types/SectionCard";

// Import Component
import TitleSection from "./TitleSection";


// COMPONENT SECTION (Using CHILDREN)
function SectionCard(props: SectionCardType) {
    const { titleSection, link, children } = props
    return (
        <div className={style.container}>
            <TitleSection title={titleSection} link={link}/>
            <div>
                {children}
            </div>
        </div>
    );
};

export default SectionCard