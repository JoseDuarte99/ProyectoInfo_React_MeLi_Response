// Import Style
import style from "./Navbar.module.css"

// Import React
import { useContext, useState } from "react";

// Import Content
import Search from "../Search/Search";
import CartIcon from "../Carrito/CartIcon";
import SearchContext from "../../context/SearchContext";


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
    if (!search){
        throw new Error('useCart must be used within a CartProvider');
    }
    const {onSearch, setOnSearch} = search;


    return (
        <header className={style.header}>
            <div className={style.container}>
                <img src={imgLogo} alt="Logo" className={style.logo}/>
                <img src={imgLogoSmall} alt="Logo" className={style.logoSmall} />
                <Search className={style.search} onSearch={onSearch} setOnSearch={setOnSearch} placeholder="Buscar products, marcas y más…" imgSearch= {imgSearch}/>
                <div className={style.advertising}>
                    <img src={imgShippingFree} alt="Logo de Mercado Libre"  />
                </div>
                <div className={style.location}>
                    <img src={imglocation} alt="Ubicacion" />
                    <a>
                        <span>Enviar a</span>
                        <span>Barrranqueras</span>
                    </a> 
                </div>
                <ul className={style.button}>
                    <li> <a href="">Categorías</a> </li>
                    <li> <a href="">Ofertas</a> </li>
                    <li> <a href="">Cupones</a> </li>
                    <li> <a href="">Supermercado</a> </li>
                    <li> <a href="">Moda</a> </li>
                    <li> <a href="">Mercado Play</a> </li>
                    <li> <a href="">Vender</a> </li>
                    <li> <a href="">Ayuda</a> </li>
                </ul>
                <div className={style.login}>
                    <ul>
                        <li> <a href="">Creá tu cuenta</a> </li>
                        <li> <a href="">Ingresá</a> </li> 
                        <li> <a href="">Mis compras</a> </li> 
                    </ul>
                    <CartIcon quantity={0} className={style.cart}/>
                </div>                   
                

                <nav className={style.menu}>
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
                    <ul className={style.itemsMenu}>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Buttons</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Navbar