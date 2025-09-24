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
                <h3>{p.category}</h3>
            </div>

                {/* DISPLAY PRODUCT */}
                <section>

                    <Link to={`/producto/${p.idProduct}`}>
                        <img src={p.img} alt={p.title}/>
                    </Link>
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
                            ?<p className="text-sm mr-1 ml-1">{unitsProductInCart}</p>
                            :<>{0}</>}
                        <button className="flex-1 text-xl font-light hover:bg-blue-100 rounded-md text-cyan-700 cursor-pointer h-[2rem] mr-1 ml-1" onClick={() =>productCart.addProductCart([p])}>+</button>
                    </div>

                    <div className="justify-self-end">
                        <h4 className="text-2xl text-gray-800">${p.price.toLocaleString('es-AR')}</h4>
                        <p className="text-[0.6rem] text-neutral-500 font-bold text-center">Precio por unidad</p>
                        { p.shippingPrice
                            ? <p className="pt-2 text-[0.6rem] text-neutral-500 font-bold text-center"><span className="font-semibold">Costo de envío:</span> $ {p.shippingPrice}  </p>
                            : <p className="pt-2 font-medium text-[0.8rem] text-green-600 text-center"> Envío Gratis</p>
                        }
                    </div>

                </section> 
            </div>
    )
}


export default CartInProduct;