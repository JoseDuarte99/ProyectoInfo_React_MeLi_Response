// Import Style
import style from "./FetchingData.module.css"

// Import React
import { Link } from "react-router"

// Import Svg
import { LoadingProducts, NotFound404Svg } from "../../imageSvg"



export function LoadingProduct () {
    return(
        <div className={style.fetchingData}>
            <span> {LoadingProducts()} </span>
            <h4 >Cargando...</h4>
            <Link to="/"> Ir a la página principal</Link>
        </div>
    )
}


export function ProductNotFound (){
    
    return(
        <div className={style.fetchingData}>
            <span> {NotFound404Svg()} </span>
            <h4>El producto buscado, no existe</h4>
            <Link to="/"> Ir a la página principal</Link>
        </div>)
    }
    


export function ErrorLoadingProduct () {
    return(
        <div className={style.fetchingData}>
            <span> {NotFound404Svg()} </span>
            <h4 >Ocurrio un error</h4>
            <Link to="/"> Ir a la página principal</Link>
        </div>
    )
}
