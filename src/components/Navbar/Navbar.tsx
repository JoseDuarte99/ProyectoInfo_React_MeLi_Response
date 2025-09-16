// Import Style
import style from "./Navbar.module.css"

// Import React
import { useContext, useState } from "react";

// Import Components
import Search from "../Search/Search";
import CartIcon from "../Cart/CartIcon";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DropdownCategories from "../DropdownCategories/DropdownCategories";

// Import Context
import SearchContext from "../../context/SearchContext";
import CartContext from "../../context/CartContext";
import FilterContext from "../../context/FilterContext";
import StatusFilterContext from "../../context/StatusFilterContext";

// Import Types
import { FilterType } from "../../types/OthersTypes"; 

// Import IMG
import imgLogo from "../../assets/LogoMeLi.svg";
import imgLogoSmall from "../../assets/LogoMeLi-Small.png";
import imgShippingFree from "../../assets/EnvioGratis.webp";
import imgSearch from "../../assets/lupa.svg";
import imglocation from "../../assets/location.svg";






function Navbar() {

    // Dropdown Menu Status
    const [menuValue, setMenuValue] = useState(false); 

    // Search Context 
    const search = useContext(SearchContext);
    if (!search){throw new Error('useCart must be used within a CartProvider')}
    const {onSearch, setOnSearch} = search;

    // Cart Context 
    const productCart = useContext(CartContext);
    if (!productCart){throw new Error('ERROR EN EL CARRITO DE COMPRAS')}

    const quantityProductCart = new Set(productCart.contextState.map(p => p.idProduct));

    // Filter Context 
    const filtersProduct = useContext(FilterContext);
    if (!filtersProduct){throw new Error('ERROR EN LOS FILTROS')}
    const {addFilterProducts, 
        // resetFilterProducts
    } = filtersProduct;

    // Status Filter Context 
    const statusFiltersProduct = useContext(StatusFilterContext);
    if (!statusFiltersProduct){throw new Error('ERROR EN EL ESTADO DEL FILTRO')}
    const { setFilteringState } = statusFiltersProduct;

    return (
        <nav className={style.header}>
            <div className={style.container}>
                <img src={imgLogo} alt="Logo" className={style.logo}/>
                <img src={imgLogoSmall} alt="Logo" className={style.logoSmall} />
                <Search className={style.search} onSearch={onSearch} setOnSearch={setOnSearch} placeholder="Buscar products, marcas y más…" imgSearch= {imgSearch}/>
                <img src={imgShippingFree} alt="Logo de Mercado Libre" className={style.advertising} />
                <div className={style.location}>
                    <img src={imglocation} alt="Ubicacion" />
                    <a>
                        <span>Enviar a</span>
                        <span>Barranqueras</span>
                    </a> 
                    <span>
                        <svg viewBox="0 0 20 20">
                            <polyline points="7,5 13,10 7,15" fill="none" stroke="black" strokeWidth={1} />
                        </svg> 
                    </span>
                </div>
                <ul className={style.button}>
                    <li className={style.buttonCategories}> Categorías               
                        <span>
                            <svg viewBox="0 0 20 20">
                                <polyline points="5,7 10,13 15,7" fill="none" stroke="black" strokeWidth="1" />
                            </svg>
                        </span>
                        <div className={style.dropdownCategories}>
                            <DropdownCategories />
                        </div>
                    </li>
                    <li onClick={() => {addFilterProducts(FilterType.Promotion, "Oferta"); setFilteringState(true)}}> <a href="">Ofertas</a> </li>
                    <li onClick={() => {addFilterProducts(FilterType.Promotion, "Cupón"); setFilteringState(true)}}> <a href="">Cupones</a> </li>
                    <li onClick={() => {addFilterProducts(FilterType.Category, "Supermercado"); setFilteringState(true)}}> <a href="">Supermercado</a> </li>
                    <li onClick={() => {addFilterProducts(FilterType.Category, "Moda"); setFilteringState(true)}}> <a href="">Moda</a> </li>
                    <li onClick={() => {addFilterProducts(FilterType.Promotion, "Mercado Play"); setFilteringState(true)}}
                        className={style.buttonMercadoPlay}>
                        <span>GRATIS</span>
                        <a href="">Mercado Play</a> 
                    </li>
                    <li> <a href="">Vender</a> </li>
                    <li> <a href="">Ayuda</a> </li>
                </ul>
                <div className={style.login}>
                    <ul>
                        <li> <a href="">Creá tu cuenta</a> </li>
                        <li> <a href="">Ingresá</a> </li> 
                        <li> <a href="">Mis compras</a> </li>
                    </ul>
                    <CartIcon quantity={quantityProductCart.size}className={style.cart}/>  
                </div>  
                <CartIcon quantity={quantityProductCart.size} className={style.cartSmall}/>                 

                <div className={style.menu}>
                    <input type="checkbox" id="menu" checked={menuValue} className={style.menuInput} onChange={() => setMenuValue(!menuValue)} />   
                    <label htmlFor="menu" className={style.activeMenu}>
                        { menuValue   
                        ?   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                            </svg>
                        :   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 6h16v1H4zM4 11h16v1H4zM4 16h16v1H4z" />
                            </svg>}
                    </label>
                    <div className={style.itemsMenu}>
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar