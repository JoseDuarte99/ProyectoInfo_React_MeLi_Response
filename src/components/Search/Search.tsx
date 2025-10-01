// Import Style
import style from "./Search.module.css"

// Import Types
import type { SearchProps } from "../../types/SearchType";

// Import React
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

// Import Services
import { productService } from "../../data/services";

// Import Components
// import LoadingProduct from "../loadingProduct";
import ErrorLoadingProduct from "../errorLoadingProduct";




function Search(props: SearchProps){
    const { placeholder, imgSearch, onSearch, setOnSearch} = props

    const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnSearch(e.target.value);
    };

    // Function for normalize string
    const normalizeString = (text: string): string => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();


    // --------------------------------- IMPLEMENTANDO SERVICIOS CON REACT QUERY -----------------------------------
    

    const {isError, data, error } = useQuery({
        queryKey:["getProduct"],
        queryFn: productService.getAllProducts,
    })

    // if (isPending) {
    //     return <LoadingProduct/>
    // }

    if (isError) {
        console.error(error);
        return <ErrorLoadingProduct/>
    }

    const products = data ? data : [];
    
    // -------------------------------------------------------------------------------------------------------------

    // Function for see result searches
    const resultSearch = onSearch
        ? products.filter(product => normalizeString(product.title).includes(normalizeString(onSearch)))
        : undefined;

    return(
        <>
            <input 
                value={onSearch}
                onChange={searching}
                className={style.inputSearch}
                type="search" 
                placeholder={ placeholder }
                onBlur={() => {
                    setTimeout(() => setOnSearch(""), 100);
                }}
                
            />
            <button type="submit" className={style.buttonSearch}>
                <img src={imgSearch} alt="Lupa" />
            </button>

            {resultSearch 
            ? <div className={style.searchResult}>
            {resultSearch.map(product => {
                return (                
                    <Link to={`/producto/${product.idProduct}`} onClick={() => setOnSearch("")} key={product.idProduct} >
                        <img  src={imgSearch} alt="Lupa" />
                        <p>{product.title}</p>
                    </Link>
                )})}
                </div>
            : <></> }
        </>
    );
}

export default Search