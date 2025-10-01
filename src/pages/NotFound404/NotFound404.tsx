// Import Style
import style from "./NotFound404.module.css"

// Import React
import { Link } from "react-router"

// Import Svg
import { NotFound404Svg } from "../../imageSvg"


function NotFound404(){


    return (
        <div className={style.notFound404}>
            <span> {NotFound404Svg()} </span>
            <h4 className="text-xl font-semibold mt-[2rem] mb-[2rem]">Parece que esta página no existe</h4>
            <Link to="/" className="font-light text-neutral-700"> Ir a la página principal</Link>
        </div>
    )
};

export default NotFound404
