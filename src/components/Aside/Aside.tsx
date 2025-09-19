// Import Style
import style from "./Aside.module.css"

// Import React
import { useContext, useState } from "react";

// Import Context
import StatusFilterContext from "../../context/StatusFilterContext";
import FilterContext from "../../context/FilterContext";

// Import Types
import { FilterType } from "../../types/OthersTypes";

// Import SVG
import { CruzIcon } from "../../imageSvg";

// Import Data
import { categories } from "../../data/db";


function Aside() {

    const [priceMax, setPriceMax] = useState("");
    const [priceMin, setPriceMin] = useState("");

    // Filter Context 
    const filtersProduct = useContext(FilterContext);
    if (!filtersProduct){throw new Error('ERROR EN LOS FILTROS')}
    const { valueFilter, addFilterProducts, removeFilterProducts, resetFilterProducts } = filtersProduct;


    // Status Filter Context 
    const statusFiltersProduct = useContext(StatusFilterContext);
    if (!statusFiltersProduct){throw new Error('ERROR EN EL ESTADO DEL FILTRO')}
    const {filteringState, setFilteringState } = statusFiltersProduct;
    
    // Product filtering
    const categoryFilterName = valueFilter.find(f => f.type === FilterType.Category)?.name;
    const priceFilterMax = valueFilter.find(f => f.type === FilterType.PriceMax)?.max;
    const priceFilterMin = valueFilter.find(f => f.type === FilterType.PriceMin)?.min;
    const promotionFilter = valueFilter.find(f => f.type === FilterType.Promotion)?.id;




    return (
        <div className={style.aside}>
            <h4>Filtros</h4>
            <p>Categorías</p>
            
            { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            {filteringState && categoryFilterName
                ? <button 
                onClick={() => removeFilterProducts(FilterType.Category, "")}
                className={style.removeFilter}> {categoryFilterName}{<CruzIcon/>}</button>
                : <ul >
                {categories.map((category) => (
                    <li onClick={() => addFilterProducts(FilterType.Category, category.name)}
                    key={category.id}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </li>
                ))}</ul>
            }
            
            <p>Precio</p>
            {priceFilterMin !== 0
                ? <button 
                    onClick={ () => removeFilterProducts(FilterType.PriceMin, "")} 
                    className={style.removeFilter}
                    > Desde $ {priceFilterMin!.toLocaleString("es-AR")}{<CruzIcon/>}</button>
                : <></> 
            }
            {priceFilterMax !== 0
                ? <button 
                    onClick={ () => removeFilterProducts(FilterType.PriceMax, "")} 
                    className={style.removeFilter}
                    > Hasta $ {priceFilterMax!.toLocaleString("es-AR")}{<CruzIcon/>}</button>
                : <></> 
            }
            <div className={style.priceMinMax}>
                <input
                type="number"
                placeholder="Mínimo"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                />
                
                <input
                type="number"
                placeholder="Máximo"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                />
                { /* TERNARIO ---------------------------------------------------------------------------------------- */}
                <button 
                    className={priceMax || priceMin
                        ? style.allowed
                        : style.notAllowed
                    } 
                    onClick={() => {
                        if (priceMax) {addFilterProducts(FilterType.PriceMax, priceMax);  setPriceMax("")};
                        if (priceMin) {addFilterProducts(FilterType.PriceMin, priceMin);  setPriceMin("")};
                        if (priceMax && priceMin) {addFilterProducts(FilterType.PriceMax, priceMax); addFilterProducts(FilterType.PriceMin, priceMin); setPriceMax("");setPriceMin("") };
                    }}>
                        <svg viewBox="0 0 20 20">
                            <polyline points="7,5 13,10 7,15" fill="none" stroke="white" strokeWidth={1.8} />
                        </svg>
                </button> 
            </div>

            <p>Tipo de Promoción</p>
            
            { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            {promotionFilter
                ? <button onClick={ () => removeFilterProducts(FilterType.Promotion, "")} className={style.removeFilter}> {promotionFilter}{<CruzIcon/>}</button>
                : <ul>
                    <li onClick={() => addFilterProducts(FilterType.Promotion, "Oferta")} >Oferta</li>
                    <li onClick={() => addFilterProducts(FilterType.Promotion, "Descuento")} >Descuento</li>
                    <li onClick={() => addFilterProducts(FilterType.Promotion, "Cupón")} >Cupón</li>
                </ul> }
                
                <button onClick={() => {setFilteringState(false); resetFilterProducts(FilterType.Reset, "")}} className={style.resetFilters}> <span>Quitar Filtros</span>{<CruzIcon/>}</button>
        </div>
    )
}

export default Aside