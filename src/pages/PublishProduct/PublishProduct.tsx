// Import Style
import style from "./PublishProduct.module.css"

// Import React
import { Link } from "react-router"


function PublishProduct() {

    return (
        <div className={style.publishProduct}>
            <div>
                <h2>¡Hola! Antes que nada contanos, <br/> ¿qué vas a publicar?</h2>
                <div className={style.categories}>
                    <Link to={"form/tecnologia"}>
                        {imgTecnology}
                        <p>Tecnología</p>
                    </Link>
                    <Link to={"form/hogar"}>
                        {imgHome}
                        <p>Hogar</p>
                    </Link>
                    <Link to={"form/moda"}>
                        {imgFashion}
                        <p>Moda</p>
                    </Link>
                    <Link to={"form/supermercado"}>
                        {imgSupermarket}
                        <p>Supermercado</p>
                    </Link>
                    <Link to={"form/deporte"}>
                        {imgSport}
                        <p>Deporte</p>
                    </Link>
                </div>
                <div className={style.buttonHome}>
                    <Link to="/"> Ir a la página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default PublishProduct



const imgTecnology = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="10" width="33" height="28" rx="4" fill="#4A90E2" stroke="#1C3F7A" strokeWidth="2"/>
    <rect x="36" y="16" width="21" height="16" rx="2" fill="#FFFFFF"/>
    <path d="M30 6V10M63 6V10M30 38V42M63 38V42M26 14H30M26 22H30M26 30H30M63 14H67M63 22H67M63 30H67" stroke="#1C3F7A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    )

const imgHome = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.5 12L30 26H36V36H57V26H63L46.5 12Z" fill="#F5A623" stroke="#8C4A00" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="40" y="28" width="13" height="8" fill="#FFFFFF"/>
    <path d="M30 26V38H63V26" stroke="#8C4A00" strokeWidth="2"/>
    </svg>
)

const imgFashion= (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 12L46.5 18L57 12L60 18L54 22V36H39V22L33 18L36 12Z" fill="#D0021B" stroke="#7A0010" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="42" y="24" width="9" height="12" fill="#FFFFFF"/>
    </svg>
)

const imgSupermarket = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 14H34L38 28H60L64 18H40" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="40" cy="36" r="4" fill="#7ED321" stroke="#417505" strokeWidth="2"/>
    <circle cx="58" cy="36" r="4" fill="#7ED321" stroke="#417505" strokeWidth="2"/>
    </svg>
)

const imgSport = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="46.5" cy="24" r="14" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
    <polygon points="46.5,16 50,20 48.5,25 44.5,25 43,20" fill="#000000"/>
    <polygon points="43,20 40,24 43,28 44.5,25" fill="#000000"/>
    <polygon points="50,20 53,24 50,28 48.5,25" fill="#000000"/>
    <polygon points="44.5,25 43,28 46.5,32 48.5,25" fill="#000000"/>
    <polygon points="48.5,25 50,28 46.5,32" fill="#000000"/>
</svg>

)