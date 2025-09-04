// Import Style
import style from "./DropdownMenu.module.css"

// Import IMG
import ProfileNone from "../../../public/SinPerfil.jpg"


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
        </>
    )
}

export default DropdownMenu