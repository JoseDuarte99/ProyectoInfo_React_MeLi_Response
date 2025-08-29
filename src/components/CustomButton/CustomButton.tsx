// Import Style
// import style from "./CustomButton.module.css"

// Import React
// import { Link } from "react-router";


// TIPING THE BUTTON-CUSTOM
export type ButtonCustomProps = {
    textButton?: string;
    className?: string;
    hrefButton?: string;
};

function CustomButton(props: ButtonCustomProps) {
    const { textButton,
        className, 
        // hrefButton 
        } = props

    return(
        <li className={className}>{textButton}</li>
    )
    // return(
    //     hrefButton
    //     ? <Link className={className} to={hrefButton}>{textButton}</Link>
    //     : <div className={className}>{textButton}</div>
    // );
};

export default CustomButton