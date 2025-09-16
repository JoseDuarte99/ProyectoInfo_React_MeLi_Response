// Import Style
import style from "./DropdownCategories.module.css"

//  Import React
import { useContext } from "react";

// Import Context
import FilterContext from "../../context/FilterContext";
import StatusFilterContext from "../../context/StatusFilterContext";

// Import Types
import { FilterType } from "../../types/OthersTypes";







function DropdownCategories () {

    // Filter Context 
    const filtersProduct = useContext(FilterContext);
    if (!filtersProduct){throw new Error('ERROR EN LOS FILTROS')}
    const {addFilterProducts,
        //  resetFilterProducts
        } = filtersProduct;

    // Status Filter Context 
    const statusFiltersProduct = useContext(StatusFilterContext);
    if (!statusFiltersProduct){throw new Error('ERROR EN EL ESTADO DEL FILTRO')}
    const { setFilteringState } = statusFiltersProduct;

    return (
        <ul className={style.container}>
            <li onClick={() => {addFilterProducts(FilterType.Promotion, "Oferta"); setFilteringState(true)}}><a href="">Tecnología</a></li>
            <li onClick={() => {addFilterProducts(FilterType.Promotion, "Oferta"); setFilteringState(true)}}><a href="">Hogar</a></li>
            <li onClick={() => {addFilterProducts(FilterType.Promotion, "Oferta"); setFilteringState(true)}}><a href="">Deporte</a></li>
            <li onClick={() => {addFilterProducts(FilterType.Promotion, "Oferta"); setFilteringState(true)}}><a href="">Supermercado</a></li>
            <li onClick={() => {addFilterProducts(FilterType.Promotion, "Oferta"); setFilteringState(true)}}><a href="">Moda</a></li>
        </ul>
    )
}

export default DropdownCategories