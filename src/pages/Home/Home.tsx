// Import Styles
import style from "./Home.module.css"

// Import Components
import Aside from "../../components/Aside/Aside";
import SectionCard from "../../components/SectionCard/SectionCard"
import ProductCard from "../../components/ProductCard/ProductCard";
import { LoadingProduct, ErrorLoadingProduct } from "../../components/FetchingData/FetchingData";


// Import Data
import { productService } from "../../data/services";

// Import Context
import CartContext from "../../context/CartContext";
import FilterContext from "../../context/FilterContext";
import StatusFilterContext from "../../context/StatusFilterContext";

// Import React
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

// Import Types
import { FilterType } from "../../types/OthersTypes";



function Home() {

    // ProductCart Context 
    const productCart = useContext(CartContext);
    if (!productCart){throw new Error('ERROR EN EL CARRITO DE COMPRAS');}

    // Filter Context 
    const filtersProduct = useContext(FilterContext);
    if (!filtersProduct){throw new Error('ERROR EN LOS FILTROS')}
    const { valueFilter
        // , addFilterProducts, removeFilterProducts, resetFilterProducts 
    } = filtersProduct;


    // Status Filter Context 
    const statusFiltersProduct = useContext(StatusFilterContext);
    if (!statusFiltersProduct){throw new Error('ERROR EN EL ESTADO DEL FILTRO')}
    const {filteringState, setFilteringState } = statusFiltersProduct;
    
    // Product filtering
    const categoryFilterName = valueFilter.find(f => f.type === FilterType.Category)?.name;
    const priceFilterMax = valueFilter.find(f => f.type === FilterType.PriceMax)?.max;
    const priceFilterMin = valueFilter.find(f => f.type === FilterType.PriceMin)?.min;
    const promotionFilter = valueFilter.find(f => f.type === FilterType.Promotion)?.id;
    

    // --------------------------------- IMPLEMENTANDO SERVICIOS CON REACT QUERY -----------------------------------
    

    const { isPending, isError, data, error } = useQuery({
        queryKey:["getProduct"],
        queryFn: productService.getAllProducts,
    })

    if (isPending) {
        return <LoadingProduct/>
    }

    if (isError) {
        console.error(error);
        return <ErrorLoadingProduct/>
    }

    let productsForDisplay = data;

    // const myProducts = productsForDisplay.filter(p => p.by);
    
    // -------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------
    

    // Filtered by category
    if (categoryFilterName) {
        productsForDisplay = productsForDisplay.filter(product => product.category === categoryFilterName);
    }
    
    // Filtered by minium price 
    if (priceFilterMax && priceFilterMax !== 0) {
        productsForDisplay = productsForDisplay.filter(product =>  product.price <= priceFilterMax);
    }
    
    // Filtered by maximum price
    if (priceFilterMin && priceFilterMin > 0) {
        productsForDisplay = productsForDisplay.filter(product =>  product.price >= priceFilterMin);
    }
    
    // Filtered by type promotion
    if (promotionFilter) {
        productsForDisplay = productsForDisplay.filter(product =>  product.priceInfo?.includes(promotionFilter));
    }

    
    return (
    <div className={filteringState ? style.homeAside: style.home}>

        { /* TERNARIO ---------------------------------------------------------------------------------------- */}
        { filteringState
            ?<aside className={style.aside}>
                <Aside/>
            </aside>
            : "" }

        {/* <div className={style.products}> */}
        { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            {filteringState 
                ? <>
                </>
                : <button className={style.buttonFilter} onClick={() => setFilteringState(true)}>Filtrar</button> 
            }

        { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            {filteringState 
                ? <div className={style.container}>
                    <SectionCard 
                        titleSection =
                            {categoryFilterName 
                                ? promotionFilter
                                    ? `Resultado de ${categoryFilterName} con ${promotionFilter}` 
                                    : `Resultado de ${categoryFilterName}` 
                                : promotionFilter
                                    ? `Todos los productos con ${promotionFilter}`
                                    : "Todos los productos"}>
                        {productsForDisplay.map(product => {
                            return (
                                <ProductCard 
                                key={product.idProduct}
                                idProduct={product.idProduct}
                                category={product.category}
                                img={product.img}
                                title={product.title}
                                previousPrice={product.previousPrice}
                                price={product.price}
                                withDiscount={product.withDiscount}
                                priceInfo={product.priceInfo}
                                freeShipping={product.freeShipping}
                                onClickAdd={() => productCart.addProductCart([product])}
                                onClickRemove={() => productCart.removeProductCart([product])}
                                units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                                />
                            );})
                        }
                    </SectionCard>
                </div>
                : <div className={style.container}>
                    <SectionCard titleSection="Lo más vendidos de la semana" link="Ir a Más vendidos">
                        {productsForDisplay.filter((p) => p.idProduct < 8 ).map(product => {
                            return (
                                <ProductCard 
                                key={product.idProduct}
                                idProduct={product.idProduct}
                                category={product.category}
                                img={product.img}
                                title={product.title}
                                previousPrice={product.previousPrice}
                                price={product.price}
                                withDiscount={product.withDiscount}
                                priceInfo={product.priceInfo}
                                freeShipping={product.freeShipping}
                                onClickAdd={() => productCart.addProductCart([product])}
                                onClickRemove={() => productCart.removeProductCart([product])}
                                units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                                />
                            );})
                        }
                    </SectionCard>
                    <SectionCard titleSection="También puede interesarte">
                        {productsForDisplay.filter((p) => p.idProduct >= 8 && p.idProduct < 15).map(product => {
                            return (
                                <ProductCard 
                                key={product.idProduct}
                                idProduct={product.idProduct}
                                category={product.category}
                                img={product.img}
                                title={product.title}
                                previousPrice={product.previousPrice}
                                price={product.price}
                                withDiscount={product.withDiscount}
                                priceInfo={product.priceInfo}
                                freeShipping={product.freeShipping}       
                                onClickAdd={() => productCart.addProductCart([product])}
                                onClickRemove={() => productCart.removeProductCart([product])}
                                units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                                />
                            );})
                        }
                    </SectionCard>
                    <SectionCard titleSection="Productos más buscados de la semana" link="Ir a los más buscados">
                        {productsForDisplay.filter((p) => p.idProduct >= 15 && p.idProduct < 22).map(product => {
                            return (
                                <ProductCard 
                                key={product.idProduct}
                                idProduct={product.idProduct}
                                category={product.category}
                                img={product.img}
                                title={product.title}
                                previousPrice={product.previousPrice}
                                price={product.price}
                                withDiscount={product.withDiscount}
                                priceInfo={product.priceInfo}
                                freeShipping={product.freeShipping}   
                                onClickAdd={() => productCart.addProductCart([product])}
                                onClickRemove={() => productCart.removeProductCart([product])}
                                units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                                />
                            );})
                        }
                    </SectionCard>
                    <SectionCard titleSection="Relacionado con lo último que viste">
                        {productsForDisplay.filter((p) => p.idProduct >= 22 && p.idProduct < 29).map(product => {
                            return (
                                <ProductCard 
                                key={product.idProduct}
                                idProduct={product.idProduct}
                                category={product.category}
                                img={product.img}
                                title={product.title}
                                previousPrice={product.previousPrice}
                                price={product.price}
                                withDiscount={product.withDiscount}
                                priceInfo={product.priceInfo}
                                freeShipping={product.freeShipping}   
                                onClickAdd={() => productCart.addProductCart([product])}
                                onClickRemove={() => productCart.removeProductCart([product])}
                                units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                                />
                            );})
                        }
                    </SectionCard>
                </div>
            }
        </div>
    // </div>
    )
}

export default Home