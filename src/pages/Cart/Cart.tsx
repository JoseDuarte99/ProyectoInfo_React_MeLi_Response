// Import Styles
import style from "../Cart/Cart.module.css"

// Import Components
import CartInProduct from "../../components/ProductInCart/ProductInCart";
import CartContext from "../../context/CartContext";

// Import React
import { useContext } from "react";
import { Link } from "react-router";

// Import Type
import type { ProductBase } from "../../types/OthersTypes";




function Cart() {

    // ProductCart Context 
    const productCart = useContext(CartContext);
    if (!productCart){throw new Error('ERROR EN EL CARRITO DE COMPRAS');}

    const productsAll = productCart.contextState;
    const productsByType = productsAll.reduce((acc: ProductBase[], p: ProductBase) => {
    if (!acc.some(item => item.idProduct === p.idProduct)) {
        acc.push(p);
    }
    return acc;
    }, []);

    const totalPriceProduct = productsAll
        ? productsAll.reduce((acc, p) => acc + (p.price ?? 0), 0)
        : 0;

    const totalPriceShipping = productsByType
        ? productsByType.reduce((acc, p) => acc + (p.shippingPrice ?? 0), 0)
        : 0;
    
    const totalPrice = totalPriceProduct + totalPriceShipping;

    console.log(productsAll)
    console.log(productsByType)

    return(
        <div className={style.cart}>

            <main>
                <div>
                    {/* SECTION PRODUCTS */}
                    <section  className={style.productInCart}>

                        <h1>Todos los productos</h1>

                        {/* DIV PRODUCT */}
                        <div>
                            {productsByType.map(p => 
                                <CartInProduct key={p.idProduct} product={p}/>
                            )}
                        </div>

                    { productsAll.length > 0
                        ? <div className={style.emptyCart}>
                            <button  onClick={productCart.resetCart}>
                                    Vaciar carrito
                            </button>
                        </div>
                        : <></>
                    }
                    </section>

                    {/* SECTION END PRICE */}
                    <section  className={style.totalPriceCart}>
                            <h3>Resumen de compra</h3>
                            <div className={style.infoPrice}>
                                <span>
                                    <p>Producto</p>
                                    <p>$ {totalPriceProduct !== 0? totalPriceProduct.toLocaleString('es-AR') : 0}</p>
                                </span>
                                <span>
                                    <p>Envío</p>
                                    <p>$ {totalPriceShipping !== 0? totalPriceShipping.toLocaleString('es-AR') : 0}</p>
                                </span>

                                <span>
                                    <p>Total</p>
                                    <p>$ {totalPrice !== 0? totalPrice.toLocaleString('es-AR') : 0}</p>
                                </span>
                            </div>

                            <div className={style.buttons}>
                                <Link to="/checkout" className={style.buttonComprar}>
                                    <button>
                                        Continuar compra
                                    </button>
                                </Link>
                                <Link to="/" className={style.buttonVolver}>
                                    <button>
                                            Volver
                                    </button>
                                </Link>
                            </div>
                    </section>

                </div>
            </main>

        </div>
    )
}

export default Cart;