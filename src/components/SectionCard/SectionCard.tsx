// Import Styles
import style from "./SectionCard.module.css"

// Import Types
import type { SectionCardType } from "../../types/SectionCard";


// COMPONENT SECTION (Using CHILDREN)
function SectionCard(props: SectionCardType) {
    const { titleSection, children } = props
    return (
        <div className={style.container}>
            <>{titleSection}</>
            <div>
                {children}
            </div>
        </div>
    );
};

export default SectionCard