// Import Style
import style from "./DropdownCategories.module.css"

type Aux= {
    set: (state:boolean) => void;
}

function DropdownCategories ( {set} : Aux) {
    return (
        <div className={style.container} onMouseLeave={() => set(false)}>
            <ul >
                <li><a href="">Tecnología</a></li>
                <li><a href="">Hogar</a></li>
                <li><a href="">Deporte</a></li>
                <li><a href="">Supermercado</a></li>
                <li><a href="">Moda</a></li>
            </ul>
        </div> 
    )
}

export default DropdownCategories