// Import Style
import style from "./DropdownMenu.module.css"

// Import IMG and SVG
import ProfileNone from "../../../public/SinPerfil.jpg"
import { HomeSvg, SummarySvg, OnSaleSvg, 
        // FashionSvg, OfferSvg, SuperMarketSvg, PlaySvg, HistorySvg, HeadsetSvg, BestSellingSvg, OfficialStoreSvg, CategoriesSvg, DownloadSvg 
    } from "./DropdownMenuIcons"
import { Link } from "react-router"

type DropdownMenuType = {
    onClickDropdownMenu: () => void;
}

function DropdownMenu({onClickDropdownMenu} :DropdownMenuType) {
    return (
        <>
            <div className={style.profile}>
                <img src={ProfileNone} alt="Foto de perfil" />
                <h5>Bienvenido</h5>
                <p> Pronto podras formar parte de nuestra comunidad...</p>
                {/* <p>Ingresa a tu cuenta para ver tus compras, favoritos, etc.</p> */}
                {/* <div className={style.buttons}>
                    <button> Ingresá </button>
                    <button> Creá tu cuenta </button>
                </div> */}
            </div>
            <div className={style.options}>
                <ul>
                    <li>{HomeSvg}<Link to={"/"} onClick={onClickDropdownMenu} >Inicio</Link></li>
                    {/* <li>{OfferSvg}<Link to={"/"} onClick={onClickDropdownMenu} >Ofertas</Link></li> */}
                    {/* <li>{SuperMarketSvg}<Link to={"/ayuda"} onClick={onClickDropdownMenu} >Supermercado</Link></li> */}
                    {/* <li>{PlaySvg}<Link to={"/"} onClick={onClickDropdownMenu} >Mercado Play</Link><span className={style.buttonMercadoPlay}>GRATIS</span></li>
                    <li>{HistorySvg}<Link to={"/"} onClick={onClickDropdownMenu} >Historial</Link></li>
                    <li>{HeadsetSvg}<Link to={"/"} onClick={onClickDropdownMenu} >Ayuda</Link></li> */}
                </ul>
                <ul>
                    <li>{SummarySvg}<Link to={"/ayuda"} onClick={onClickDropdownMenu} >Ayuda</Link></li>
                    {/* <li>{FashionSvg}<Link to={"/"} onClick={onClickDropdownMenu} >Moda</Link></li>
                    <li>{BestSellingSvg}<Link to={"/"} onClick={onClickDropdownMenu} >Mas vendidos</Link><span className={style.buttonBestSelling}>NUEVO</span></li>
                    <li>{OfficialStoreSvg}<Link to={"/"} onClick={onClickDropdownMenu} >Tiendas oficiales</Link></li>
                    <li>{CategoriesSvg}<Link to={"/"} onClick={onClickDropdownMenu} >Categorías</Link></li> */}
                </ul>
                <ul>
                    {/* <li>{SummarySvg}<Link to={"/"} onClick={onClickDropdownMenu} >Resumen</Link></li> */}
                    <li>{OnSaleSvg}<Link to={"/publicarProducto"} onClick={onClickDropdownMenu} >Vender</Link></li>
                </ul>
                {/* <ul>
                    <li>{DownloadSvg}<Link to={"/"} onClick={onClickDropdownMenu} >¡Comprá y vendé con la app!</Link></li>
                </ul> */}
            </div>
        </>
    )
}

export default DropdownMenu