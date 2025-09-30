// Import Style
import style from "./CheckoutShipping.module.css"

// Import React
import { useContext, useState } from "react";
import { Link } from "react-router";

// Import Context
import CartContext from "../../context/CartContext";




function CheckoutShipping() {

    // Cart Context 
    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('useCart must be used within a CartProvider');
    }

    const [shippingEnd, setShippingEnd ]= useState(0);

    const productsByType = [...new Set(productCart.contextState)];
    const productsAll = productCart.contextState;

    const totalPriceProduct = productsAll
        ? productsAll.reduce((acc, p) => acc + (p.price ?? 0), 0)
        : 0;

    const totalPriceShipping = productsByType
        ? productsByType.reduce((acc, p) => acc + (p.shippingPrice ?? 0), 0)
        : 0;
    
    const totalPrice = totalPriceProduct + shippingEnd;

    return (
        <div className={style.checkoutShipping}>
            
            <section className={style.deliveryTypes}>

                <h2>Elegí la forma de entrega</h2>

                <div className={style.container}>
                    <section className={style.section}>
                        <div>
                            <input 
                                type="checkbox"
                                checked={shippingEnd === totalPriceShipping }
                                onChange={() => setShippingEnd(totalPriceShipping)}
                                />
                                <div>
                                    <h3>Enviar a domicilio</h3>
                                    <p>Domicilio</p>
                                    <p>Tipo de domicilio</p>
                                </div>
                        </div>
                        <div>
                            <h3 className={style.shippingType}>$ {totalPriceShipping !== 0? totalPriceShipping.toLocaleString('es-AR') : 0}</h3>
                        </div>
                    </section> 
                    <div>
                        <h4>Modificar domicilio o elegir otro</h4>
                    </div>
                </div>

                <div className={style.container}>
                    <section className={style.section}>
                        <div>
                            <input 
                                type="checkbox"
                                checked={shippingEnd === (totalPriceShipping-(totalPriceShipping*20/100))}
                                onChange={() => setShippingEnd((totalPriceShipping-(totalPriceShipping*20/100)))}
                                />
                                <div>
                                    <h3>Retiro en punto de entrega</h3>
                                    <p>Domicilio</p>
                                    <p>Horario y Fecha</p>
                                </div>
                        </div>
                        <div>
                            <h3 className={style.shippingType}>$ {totalPriceShipping !== 0? (totalPriceShipping-(totalPriceShipping*20/100)).toLocaleString('es-AR') : 0}</h3>
                        </div>
                    </section> 
                    <div>
                        <h4>Ver punto en el mapa o elegir otro</h4>
                    </div>
                </div>

                <div className={style.container}>
                    <section className={style.section}>
                        <div>
                            <input 
                                type="checkbox"
                                checked={shippingEnd === 0}
                                onChange={() => setShippingEnd(0)}
                                />
                                <div>
                                    <h3>Retirar en el domicilio del vendedor</h3>
                                    <p>Domicilio</p>
                                </div>
                        </div>
                        <div>
                            <h3 className={style.freeShipping}>GRATIS</h3>
                        </div>
                    </section> 
                </div>
                <div className={style.buttons}>
                    <Link to="/carrito">
                        <button>
                                Volver
                        </button>
                    </Link>
                    <Link to="">
                        <button>
                                Continuar
                        </button>
                    </Link>
                </div>
            </section>

            
            {/* SECTION END PRICE */}
            <section className={style.summary}>
                    <h2>Resumen de compra</h2>
                    <div>
                        <div>
                            <p>Producto</p>
                            <p>$ {totalPriceProduct !== 0? totalPriceProduct.toLocaleString('es-AR') : 0}</p>
                        </div>
                        <div>
                            <p>Envío</p>
                            <p>$ {shippingEnd.toLocaleString('es-AR') }</p>
                        </div>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>$ {totalPrice !== 0? totalPrice.toLocaleString('es-AR') : 0}</p>
                    </div>
            </section>
        </div>
    )
}

export default CheckoutShipping;