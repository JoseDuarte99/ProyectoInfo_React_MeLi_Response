// Import Style
import style from "./DropdownCategories.module.css"


function DropdownCategories () {
    return (
        <ul className={style.container}>
            <li><a href="">Tecnología</a></li>
            <li><a href="">Hogar</a></li>
            <li><a href="">Deporte</a></li>
            <li><a href="">Supermercado</a></li>
            <li><a href="">Moda</a></li>
        </ul>
    )
}

export default DropdownCategories