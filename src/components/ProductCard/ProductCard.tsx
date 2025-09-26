// Import Styles
import style from "./ProductCard.module.css"

// Import React
import { Link } from "react-router";

// Import Types
import type { ProductCartType } from "../../types/ProductCartType";


// COMPONENT PRODUCT-CARD
function ProductCard( props: ProductCartType ) {
    const { idProduct, img, category, title, previousPrice, price, withDiscount, priceInfo, freeShipping, onClickAdd, onClickRemove, units, by} = props

    return (
        <div className={style.container}>
            <Link to={`/producto/${idProduct}`}>
                <div className={style.imgContent}>
                    <img src={img} alt={title} />
                </div>
                <h3> {title} </h3>
                {withDiscount && <p className={style.previousPrice}> {previousPrice !== undefined ? `$${previousPrice}` : ""} </p>}
                <h4> ${price.toLocaleString('es-AR')} </h4>
                {withDiscount && <p className={style.priceInfo}> {priceInfo} </p>}
                <p className={style.freeShipping} >{freeShipping ? "Envío Gratis" : ""}</p>
            </Link>
            <div>
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                <button className={style.add} onClick={onClickAdd}>+</button>
                {units
                ?<p> {units} </p>
                :<></>}
                {units
                ? <button className={style.remove} onClick={onClickRemove}>-</button>
                : <button className={style.removeNone} >-</button>}
            </div>
            {by ? <p> {by} </p> : <></>}
        </div>
    );
};

export default ProductCard
