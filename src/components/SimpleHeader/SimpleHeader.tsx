// Import Style
import style from "./SimpleHeader.module.css"

// Import IMG
import imgLogo from "../../assets/LogoMeLi.svg";

// Import React
import { Link } from "react-router";
import { useContext } from "react";

// Import Context
import FilterContext from "../../context/FilterContext";
import StatusFilterContext from "../../context/StatusFilterContext";

// import Type
import { FilterType } from "../../types/OthersTypes";

function SimpleHeader() {

    // Filter Context 
    const filtersProduct = useContext(FilterContext);
    if (!filtersProduct){throw new Error('ERROR EN LOS FILTROS')}
    const {resetFilterProducts} = filtersProduct;

    // Status Filter Context 
    const statusFiltersProduct = useContext(StatusFilterContext);
    if (!statusFiltersProduct){throw new Error('ERROR EN EL ESTADO DEL FILTRO')}
    const { setFilteringState } = statusFiltersProduct;

    return (
        <header className={style.header}>
            <div>
                <Link to="/" 
                    className={style.logo} 
                    onClick={() => {setFilteringState(false); resetFilterProducts(FilterType.Reset, "")}}> 
                    <img src={imgLogo} alt="Logo"/>
                </Link>
                <Link to="/ayuda"
                    className={style.help} >
                    <p>Ayuda</p>
                </Link>
            </div>
        </header>
    )
}

export default SimpleHeader