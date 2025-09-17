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
                onClick={ () => removeFilterProducts(FilterType.Category, "")}
                className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-5" > {categoryFilterName}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                : <ul className="items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-2" >
                {categories.map((x) => (
                    <li className="hover:text-neutral-600 hover:text-lg" 
                    onClick={() => addFilterProducts(FilterType.Category, x.name)}
                    key={x.id}>{x.name.charAt(0).toUpperCase() + x.name.slice(1)}
                    </li>
                ))
            }
            </ul>
            }
            
            <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Precio</p>
            {priceFilterMin !== 0
                ? <button onClick={ () => removeFilterProducts(FilterType.PriceMin, "")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> Desde $ {priceFilterMin!.toLocaleString("es-AR")}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                : <></> 
            }
            {priceFilterMax !== 0
                ? <button onClick={ () => removeFilterProducts(FilterType.PriceMax, "")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> Hasta $ {priceFilterMax!.toLocaleString("es-AR")}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                : <></> 
            }
            <div className="flex h-fit w-fit mb-5 ml-2">
            <input
            type="number"
            placeholder="Mínimo"
            value={priceMin}
            className="text-sm text-neutral-700 border-1 border-neutral-300 rounded-sm w-16 pl-1 mr-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={(e) => setPriceMin(e.target.value)}
            />
            
            <input
            type="number"
            placeholder="Máximo"
            value={priceMax}
            className="text-sm text-neutral-700 border-1 border-neutral-300 rounded-sm w-16 pl-1 mr-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={(e) => setPriceMax(e.target.value)}
            />
            { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            <button 
            className={priceMax || priceMin
                ?"bg-blue-700 text-white rounded-4xl w-7 h-7 cursor-pointer hover:bg-blue-300"  
                :"bg-neutral-300 text-white rounded-4xl w-7 h-7 cursor-not-allowed hover:bg-neutral-300" 
            } 
            onClick={() => {
                if (priceMax) {addFilterProducts(FilterType.PriceMax, priceMax);  setPriceMax("")};
                if (priceMin) {addFilterProducts(FilterType.PriceMin, priceMin);  setPriceMin("")};
                if (priceMax && priceMin) {addFilterProducts(FilterType.PriceMax, priceMax); addFilterProducts(FilterType.PriceMin, priceMin); setPriceMax("");setPriceMin("") };
            }}>
            <svg className="ml-0.5 h-6 w-6" viewBox="0 0 20 20">
            <polyline points="7,5 13,10 7,15" fill="none" stroke="white" strokeWidth={1.8} />
            </svg>
            </button> 
            </div>
            <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Tipo de Promoción</p>
            
            { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            {promotionFilter
                ? <button onClick={ () => removeFilterProducts(FilterType.Promotion, "")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> {promotionFilter}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                : <ul className="items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-2" >
                <li onClick={() => addFilterProducts(FilterType.Promotion, "Oferta")} className="hover:text-neutral-600 hover:text-lg">Oferta</li>
                <li onClick={() => addFilterProducts(FilterType.Promotion, "Descuento")} className="hover:text-neutral-600 hover:text-lg">Descuento</li>
                <li onClick={() => addFilterProducts(FilterType.Promotion, "Cupón")} className="hover:text-neutral-600 hover:text-lg">Cupón</li>
                </ul> }
                
                <button  onClick={() => {setFilteringState(false); resetFilterProducts(FilterType.Reset, "")}} className="flex self-center justify-between text-sm text-neutral-500 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 mb-1 mt-5 hover:bg-neutral-200 hover:text-neutral-700"> Quitar Filtros {<CruzIcon className="h-4 w-4 text-neutral-400 ml-1 mt-0.5" />}</button>
        </div>
    )
}

export default Aside