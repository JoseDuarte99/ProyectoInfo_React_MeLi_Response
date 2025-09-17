// Import Style
import style from "./DropdownCategories.module.css"

//  Import React
import { useContext } from "react";
import { useNavigate } from "react-router";


// Import Context
import FilterContext from "../../context/FilterContext";
import StatusFilterContext from "../../context/StatusFilterContext";

// Import Types
import { FilterType } from "../../types/OthersTypes";
import { productsDB } from "../../data/db";







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

    const navigate = useNavigate();

    return (
        // <ul className={style.container}>
        //     <li onClick={() => {addFilterProducts(FilterType.Promotion, "Tecnología"); setFilteringState(true)}}>Tecnología</li>
        //     <li onClick={() => {addFilterProducts(FilterType.Promotion, "Hogar"); setFilteringState(true)}}>Hogar</li>
        //     <li onClick={() => {addFilterProducts(FilterType.Promotion, "Deporte"); setFilteringState(true)}}>Deporte</li>
        //     <li onClick={() => {addFilterProducts(FilterType.Promotion, "Supermercado"); setFilteringState(true)}}>Supermercado</li>
        //     <li onClick={() => {addFilterProducts(FilterType.Promotion, "Moda"); setFilteringState(true)}}>Moda</li>
        // </ul>

        <ul className={style.container}>
        {[...new Set(productsDB.map(product => product.category))]
            .map((categoria, index) => (
                <li
                    onClick={() => {addFilterProducts(FilterType.Category, categoria); setFilteringState(true); navigate("/")}} key={index}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </li>
            ))}
        </ul>
    )
}

export default DropdownCategories