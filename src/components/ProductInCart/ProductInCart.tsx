// Import Styles
import style from "../ProductInCart/ProductInCart.module.css"

// Import React
import { useContext } from "react";
import { Link } from "react-router";

// Import Type
import type { ProductBase } from "../../types/OthersTypes";

// Import Context
import CartContext from "../../context/CartContext";


type CartInProductType = {
    product: ProductBase
};


function CartInProduct (product :CartInProductType) {

    // ProductCart Context 
    const productCart = useContext(CartContext);
    if (!productCart){throw new Error('useCart must be used within a CartProvider');}

    const p = product.product
    const unitsProductInCart = productCart.contextState.filter(f => f.idProduct === p.idProduct).length;

    return (
        <div  className={style.cartInProduct}>

            {/* CATEGORY PRODUCT */}
            <div>
                <h2>{p.category}</h2>
            </div>

                {/* DISPLAY PRODUCT */}
                <section>

                    <Link to={`/producto/${p.idProduct}`}>
                        <img src={p.img} alt={p.title}/>
                    </Link>
                    <div className={style.info}>
                        <div className={style.title}>
                            <Link to={`/producto/${p.idProduct}`}>
                                <h3>{p.title}</h3>
                            </Link>
                            <button
                                onClick={() => productCart.removeAllProductByTypeCart([p])}>
                                Eliminar
                            </button>
                        </div>

                        <div className={style.addAndRemove}>
                            <button onClick={() =>productCart.removeProductCart([p])} className={unitsProductInCart ? style.removeProduct : style.removeProductNone}>-</button>
                            {unitsProductInCart
                                ?<p>{unitsProductInCart}</p>
                                :<>{0}</>}
                            <button onClick={() =>productCart.addProductCart([p])}>+</button>
                        </div>

                        <div className={style.priceInfo}>
                            <h4 >${p.price.toLocaleString('es-AR')}</h4>
                            <p>Precio por unidad</p>
                            { p.shippingPrice
                                ? <p><span>Costo de envío:</span> $ {p.shippingPrice}  </p>
                                : <p> Envío Gratis</p>
                            }
                        </div>
                    </div>
                </section> 
            </div>
    )
}


export default CartInProduct;