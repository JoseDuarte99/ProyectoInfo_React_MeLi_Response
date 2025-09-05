// Import Style
import style from "./DropdownMenu.module.css"

// Import IMG and SVG
import ProfileNone from "../../../public/SinPerfil.jpg"
import { HomeSvg, OfferSvg, PlaySvg, HistorySvg, HeadsetSvg, SuperMarketSvg } from "./DropdownMenuIcons"


function DropdownMenu() {
    return (
        <>
            <div className={style.profile}>
                <img src={ProfileNone} alt="Foto de perfil" />
                <h5>Bienvenido</h5>
                <p>Ingresa a tu cuenta para ver tus compras, favoritos, etc.</p>
                <div className={style.buttons}>
                    <button> Ingresá </button>
                    <button> Creá tu cuenta </button>
                </div>
            </div>
            <div className={style.options}>
                <ul>
                    <li>{HomeSvg}<a href="">Inicio</a></li>
                    <li>{OfferSvg}<a href="">Ofertas</a></li>
                    <li>{PlaySvg}<a href="">Mercado Play</a><span className={style.buttonMercadoPlay}>GRATIS</span></li>
                    <li>{HistorySvg}<a href="">Historial</a></li>
                    <li>{HeadsetSvg}<a href="">Ayuda</a></li>
                </ul>
                <ul>
                    <li>{SuperMarketSvg}<a href="">Supermercado</a></li>
                    <li>{OfferSvg}<a href="">Moda</a></li>
                    <li>{PlaySvg}<a href="">Mas vendidos</a><span className={style.buttonBestSelling}>NUEVO</span></li>
                    <li>{HistorySvg}<a href="">Tiendas oficiales</a></li>
                    <li>{HeadsetSvg}<a href="">Categorías</a></li>
                </ul>
                <ul>
                    <li>{HistorySvg}<a href="">Resumen</a></li>
                    <li>{HeadsetSvg}<a href="">Vender</a></li>
                </ul>
                <ul>
                    <li>{HeadsetSvg}<a href="">¡Comprá y vendé con la app!</a></li>
                </ul>
            </div>
        </>
    )
}

export default DropdownMenu